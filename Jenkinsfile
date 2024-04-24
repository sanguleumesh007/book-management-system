pipeline {
    agent any
    stages {
        stage('Install Node.js and npm') {
            steps {
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                sh 'source ~/.bashrc'
                sh 'nvm install node' // Installs the latest version of Node.js
            }
        }
        // Other stages of your pipeline
    }
}
