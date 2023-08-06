class Api::V1::BookmarksController < ApplicationController
  def create
    boookmark = Bookmark.new(bookmarks_params)
    if boookmark.save
      head 200
    else
      head 500
    end
  end

  def destroy
    bookmarks = Bookmark.find(params[:id])
    return head 404 if bookmarks.blank?

    if bookmarks.destroy
      head 200
    else
      head 500
    end
  end

  def bookmarks_params
    params.require(:bookmark).permit(:user_id, :event_id)
  end
end
