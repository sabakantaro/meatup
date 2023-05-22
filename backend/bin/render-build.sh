#!/usr/bin/env bash
# exit on error
set -o errexit

gem update --system 3.2.3
bundle install
bundle exec rake db:migrate