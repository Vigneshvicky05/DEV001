#!/bin/bash
docker build -t task37 .
echo Hyyy
docker login -u vigneshwaran1806 -p Vignesh#2005
docker tag task37 vigneshwaran1806/finaltask
docker push vigneshwaran1806/finaltask
kubectl apply -f  deploy.yaml --validate=false
kubectl apply -f svc.yaml --validate=false


