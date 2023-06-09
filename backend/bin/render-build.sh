#!/usr/bin/env bash
# exit on error
set -o errexit

export RUBY_VERSION=$(cat $RENDER_SRC_ROOT/backend/.ruby-version)
export BUNDLE_GEMFILE=$RENDER_SRC_ROOT/backend/Gemfile
set_ruby_env $(fetch_or_build "$RUBY_VERSION")
gem install bundler
gem update --system
cd backend && bundle install && bundle exec rake db:migrate