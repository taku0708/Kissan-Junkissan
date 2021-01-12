class NicesController < ApplicationController
    def create
        nice = current_user.nices.create(comment_id: params[:comment_id]) #user_idとcomment_idの二つを代入
        redirect_back(fallback_location: root_path)
    end
    
    def destroy
        nice = Nice.find_by(comment_id: params[:comment_id], user_id: current_user.id)
        nice.destroy
        redirect_back(fallback_location: root_path)
    end
    
end
