#!/bin/bash
    echo hi123
    sh 'chmod +x build.sh'
    sh './build.sh'
    docker login -u vigneshwaran1806 -p Vignesh#2005
    docker tag test vigneshwaran1806/task2
    docker push vigneshwaran1806/task2
    
