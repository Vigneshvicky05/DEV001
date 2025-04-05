#!/bin/bash
docker build -t test .
docker run -itd -p 94:80 test
