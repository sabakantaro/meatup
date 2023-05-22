#!/usr/bin/env bash
# exit on error
set -o errexit

# Upgrade RubyGems to the latest version
gem update --system

# Install Bundler
gem install bundler

# Install project dependencies
bundle install

# Run any necessary build commands
bundle exec rake db:migrate
