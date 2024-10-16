pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS = credentials('docker-credentials')
        DISCORD_WEBHOOK = credentials('discord-webhook')
        SSH_CREDENTIALS = credentials('ssh-credentials')
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Mengambil kode dari repository
                git url: 'https://github.com/username/repo.git', branch: 'main'
            }
        }

        stage('Setup Environment') {
            steps {
                // Menyalin file .env
                script {
                    sh 'cp .env.example .env'
                }
            }
        }

        stage('Get Latest Dev Version') {
            steps {
                script {
                    // Mendapatkan versi pengembangan terbaru
                    def version = sh(script: "curl -s https://api.example.com/latest | grep dev-v", returnStdout: true).trim()
                    def newVersion = version.tokenize('-').last().toInteger() + 1
                    env.NEW_VERSION = "dev-v${newVersion}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Membangun gambar Docker baru
                    sh "docker build -t your-image:${env.NEW_VERSION} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Masuk ke Docker registry dan push gambar
                    withCredentials([usernamePassword(credentialsId: 'docker-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                        sh "docker push your-image:${env.NEW_VERSION}"
                    }
                }
            }
        }

        stage('Cleanup Old Docker Tags') {
            steps {
                script {
                    // Menghapus tag gambar Docker yang lebih tua
                    sh """
                        docker images --format '{{.Repository}}:{{.Tag}}' | grep your-image | sort | head -n -3 | xargs docker rmi
                    """
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    // Deploy aplikasi menggunakan SSH
                    sshagent(['ssh-credentials']) {
                        sh """
                            ssh user@your-server 'docker stop your-container || true'
                            ssh user@your-server 'docker rm your-container || true'
                            ssh user@your-server 'docker run -d --name your-container your-image:${env.NEW_VERSION}'
                        """
                    }
                }
            }
        }

        stage('Notify Discord') {
            steps {
                script {
                    // Mengirim notifikasi ke Discord
                    def payload = """
                    {
                        "content": "Deployment successful: ${env.NEW_VERSION} has been deployed."
                    }
                    """
                    sh """
                        curl -H "Content-Type: application/json" -d '${payload}' ${DISCORD_WEBHOOK}
                    """
                }
            }
        }
    }
    
    post {
        always {
            // Menjalankan langkah ini apapun yang terjadi
            echo "Pipeline finished."
        }
        failure {
            // Mengirim notifikasi kegagalan jika terjadi
            sh """
                curl -H "Content-Type: application/json" -d '{"content": "Deployment failed!"}' ${DISCORD_WEBHOOK}
            """
        }
    }
}
