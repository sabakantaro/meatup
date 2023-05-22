#!/usr/bin/env bash
# exit on error
set -o errexit

export RUBY_VERSION=$(cat $RENDER_SRC_ROOT/backend/.ruby-version)
export BUNDLE_GEMFILE=$RENDER_SRC_ROOT/backend/Gemfile
source /home/render/ruby-env.sh
set_ruby_env "$RUBIES_ROOT/ruby-$RUBY_VERSION"

cd $RENDER_SRC_ROOT/backend
bundle exec puma -C ./config/puma.rb