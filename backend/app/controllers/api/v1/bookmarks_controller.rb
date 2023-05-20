class Api::V1::BookmarksController < ApplicationController
  def create
    Bookmark.create(bookmarks_params)
    head 200
  end

  def destroy
    bookmarks = Bookmark.find_by(id: params[:id])
    return head 404 unless bookmarks.present?

    bookmarks.destroy

    head 200
  end

  def bookmarks_params
    params.require(:bookmark).permit(:user_id, :event_id)
  end
end
