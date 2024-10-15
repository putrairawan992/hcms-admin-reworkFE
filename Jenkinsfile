pipeline {
    agent any

    parameters {
        string(name: 'JENKINSFILE_NAME', defaultValue: 'hcms-admin-rework-fe.jenkinsfile', description: 'Nama Jenkinsfile yang akan dijalankan')
    }

    stages {
        stage('Run Jenkinsfile') {
            steps {
                script {
                    // Menentukan path Jenkinsfile yang ingin dimuat
                    def jenkinsfilePath = "/var/jenkinsfiles/${params.JENKINSFILE_NAME}"

                    // Memuat Jenkinsfile dari path yang ditentukan
                    load jenkinsfilePath
                }
            }
        }
    }
}
