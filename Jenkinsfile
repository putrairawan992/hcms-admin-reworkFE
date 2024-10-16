pipeline {
    agent any
   environment {
        DOCKER_REGISTRY = credentials('docker-registry-staging')
        REPOSITORY_USER = credentials('repository-user')
        REPOSITORY_NAME = 'hcms-admin-rework-fe'
        IMAGE_NAME = 'admin-hrcms-rework'
        DOCKER_IMAGE = "${DOCKER_REGISTRY}/${IMAGE_NAME}"
        DOCKER_CREDENTIALS = 'docker-credentials'
        SSH_CREDENTIALS = 'ssh-credentials-staging'
        DISCORD_WEBHOOK = credentials('discord-webhook')
        GIT_REPOSITORY = "${REPOSITORY_USER}/${REPOSITORY_NAME}"
        GIT_REF = sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()
        EVENT = 'PUSH' // Sesuaikan dengan event yang relevan
        COMMIT_SHA = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
        COMMIT_MESSAGE = sh(script: 'git log -1 --pretty=format:"%s"', returnStdout: true).trim()
        TRIGGERED_BY = sh(script: 'git log -1 --pretty=format:"%an"', returnStdout: true).trim()
        WORKFLOW_FILE = 'Jenkinsfile'
        DATE = sh(script: 'date +"%m/%d/%Y %I:%M %p"', returnStdout: true).trim()
        SSH_USERNAME = credentials('ssh-username-secret')
        SSH_HOST = credentials('host-staging')
        ENV_FILE = credentials('env-admin-hcms-rework-fe')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Use .env file') {
            steps {
                script {
                    // Copy secret file ke direktori kerja
                    sh 'cat ${ENV_FILE} > .env'
                }
                sh 'cat .env'  // Lihat isi file (opsional)
            }
        }

        stage('Get New Dev Version') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_CREDENTIALS_USR', passwordVariable: 'DOCKER_CREDENTIALS_PSW')]) {
                    script {
                        def lastDevVersion = sh(script: '''
                            curl -u $DOCKER_CREDENTIALS_USR:$DOCKER_CREDENTIALS_PSW https://$DOCKER_REGISTRY/v2/$IMAGE_NAME/tags/list \
                            | jq -r '.tags[]' \
                            | grep '^dev-v' \
                            | sort -rV \
                            | head -n 1
                        ''', returnStdout: true).trim()

                        // Store the result in a non-sensitive environment variable
                        env.LAST_DEV_VERSION = lastDevVersion ?: "dev-v0"

                         // Extract the numeric part of the last version
                         def lastVersionNumber = env.LAST_DEV_VERSION.replaceAll(/^dev-v/, '')
                         echo "Last version number: ${lastVersionNumber}"

                        // Increment the version number
                        def newVersionNumber = "${lastVersionNumber.toInteger() + 1}"

                        // Construct the new version string
                        def newDevVersion = "dev-v${newVersionNumber}"
                        echo "New version: ${newDevVersion}"

                        // Optionally, set the new version to an environment variable
                        env.NEW_DEV_VERSION = newDevVersion
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build --no-cache -t ${DOCKER_IMAGE}:${env.NEW_DEV_VERSION} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "echo $DOCKER_PASSWORD | docker login ${DOCKER_REGISTRY} -u $DOCKER_USERNAME --password-stdin"
                    sh "docker push ${DOCKER_IMAGE}:${env.NEW_DEV_VERSION}"
                }
            }
        }

        stage('Clean up Docker Image Tags') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_CREDENTIALS_USR', passwordVariable: 'DOCKER_CREDENTIALS_PSW')]) {
                    script {
                        // Fetch all tags from the Docker registry
                        def tagsOutput = sh(script: '''
                            curl -u $DOCKER_CREDENTIALS_USR:$DOCKER_CREDENTIALS_PSW https://$DOCKER_REGISTRY/v2/$IMAGE_NAME/tags/list \
                            | jq -r '.tags[]' \
                            | grep '^dev-v' \
                            | sort -rV
                        ''', returnStdout: true).trim()

                        //echo "Raw tags output: ${tagsOutput}"

                        // Convert the raw output to a list of tags
                        def tags = tagsOutput.split('\n').collect { it.trim() }

                        //echo "Parsed tags list: ${tags}"

                        // Keep the 3 most recent tags
                        def keepTags = sh(script: '''
                            curl -u $DOCKER_CREDENTIALS_USR:$DOCKER_CREDENTIALS_PSW https://$DOCKER_REGISTRY/v2/$IMAGE_NAME/tags/list \
                            | jq -r '.tags[]' \
                            | grep '^dev-v' \
                            | sort -rV \
                            | head -n 3
                        ''', returnStdout: true).trim().split('\n')
                        echo "Tags to keep: ${keepTags}"

                        // Identify tags to delete by filtering out the ones to keep
                        def deleteTags = tags.findAll { tag -> !keepTags.contains(tag) }
                        echo "Tags to delete: ${deleteTags}"
                        // Delete old tags
                        deleteTags.each { tag ->
                            // First, get the digest for the current tag
                            def digest = sh(script: """
                                curl -sSL -u "$DOCKER_CREDENTIALS_USR:$DOCKER_CREDENTIALS_PSW" -I \
                                -H 'Accept: application/vnd.docker.distribution.manifest.v2+json' \
                                "https://$DOCKER_REGISTRY/v2/$IMAGE_NAME/manifests/${tag}" \
                                | awk '/Docker-Content-Digest/ { print \$2 }' | tr -d '\\r'
                                """, returnStdout: true).trim()

                            echo "Tag: ${tag}"
                            echo "Digest: ${digest}"

                            // Then, delete the tag using the retrieved digest
                            sh(script: """
                                curl -v -sSL -u "$DOCKER_CREDENTIALS_USR:$DOCKER_CREDENTIALS_PSW" -X DELETE \
                                "https://$DOCKER_REGISTRY/v2/$IMAGE_NAME/manifests/$digest"
                            """)
                        }
                    }
                }
            }
        }
        stage('Deploy Application') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                        script {
                        // Define the SSH username and host if not already defined
                        def sshUsername = env.SSH_USERNAME
                        def sshHost = env.SSH_HOST

                        sh """
                        ssh ${sshUsername}@${sshHost} << EOF
                                # Log in to the Docker registry
                                echo \$DOCKER_PASSWORD | docker login $DOCKER_REGISTRY -u \$DOCKER_USERNAME --password-stdin

                                # Stop and remove the existing container (if it exists)
                                docker rm -f $IMAGE_NAME || true

                                # Run the new container with the specified version
                                sudo docker run -d -it --restart always -p 3004:3000 --name $IMAGE_NAME $DOCKER_IMAGE:$NEW_DEV_VERSION

                                # Clean up old Docker images, keeping only the 2 most recent ones
                                docker images --filter=reference='$DOCKER_IMAGE:*' --format '{{.Repository}}:{{.Tag}}' | sort -rV | tail -n +3 | xargs -r docker rmi -f
                        << EOF
                        """
                        }
                }
           }
        }


        stage('Send Notification to Discord') {
            steps {
                withCredentials([string(credentialsId: 'discord-webhook', variable: 'DISCORD_WEBHOOK')]) {
                    script {
                        def payload = [
                            username: "Jenkins",
                            embeds: [
                                [
                                    title: "Success: Deployment Deployment Perta Usaha Development",
                                    description: "Done Update ${env.GIT_REPOSITORY} ke versi ${env.NEW_DEV_VERSION}",
                                    fields: [
                                        [
                                            name: "Repository",
                                            value: "${env.GIT_REPOSITORY}",
                                            inline: true
                                        ],
                                        [
                                            name: "Ref",
                                            value: "${env.GIT_REF}",
                                            inline: true
                                        ],
                                        [
                                            name: "Event",
                                            value: "${env.EVENT}",
                                            inline: true
                                        ],
                                        [
                                            name: "Commit",
                                            value: "${env.COMMIT_SHA} ${env.COMMIT_MESSAGE}",
                                            inline: true
                                        ],
                                        [
                                            name: "Triggered by",
                                            value: "${env.TRIGGERED_BY}",
                                            inline: true
                                        ],
                                        [
                                            name: "Workflow",
                                            value: "${env.WORKFLOW_FILE}",
                                            inline: true
                                        ],
                                        [
                                            name: "Date",
                                            value: "${env.DATE}",
                                            inline: true
                                        ]
                                    ],
                                    color: 65280 // Green color
                                ]
                            ]
                        ]

                        def jsonPayload = groovy.json.JsonOutput.toJson(payload)

                        echo "Payload JSON: ${jsonPayload}"

                        sh """
                        curl -X POST -H "Content-Type: application/json" -d '${jsonPayload}' ${DISCORD_WEBHOOK}
                        """
                    }
                }
            }
        }
    }
}
