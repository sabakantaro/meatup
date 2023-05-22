#!/usr/bin/env bash
# exit on error
set -o errexit

# bundle install
# bundle exec rake db:migrate

# export RUBY_VERSION=3.1.0 &&
# export BUNDLE_GEMFILE=$RENDER_SRC_ROOT/Gemfile &&
# set_ruby_env $(fetch_or_build "3.1.0") &&
# /opt/render/project/rubies/ruby-3.1.0/bin/gem update --system &&
# /opt/render/project/rubies/ruby-3.1.0/bin/bundle config set
# /opt/render/project/rubies/ruby-3.1.0/bin/bundle install &&
# bundle install &&
# bundle exec rake db:migrate

export RUBY_VERSION=$(cat $RENDER_SRC_ROOT/backend/.ruby-version)
export BUNDLE_GEMFILE=$RENDER_SRC_ROOT/backend/Gemfile
set_ruby_env $(fetch_or_build "$RUBY_VERSION")
gem install bundler
gem update --system
cd backend && bundle install && bundle exec rake db:migrate