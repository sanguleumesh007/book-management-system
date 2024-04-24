pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'history'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
