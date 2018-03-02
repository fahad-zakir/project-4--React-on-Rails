class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
    end

    def create
        @user = User.first
        @activity = Activity.find(params[:activity_id])

        actual_real_params = comment_params
        actual_real_params[:user_id] = @user.id
        actual_real_params[:activity] = @activity

        @comment = Comment.create!(actual_real_params)

       # @response = {comment: @comment, activity_id: @activity}
        render json: @comment      
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end
    # def destroy
    #     @comment = Comment.find(params[:id].destroy
    #     @comments = Comment.all
    #     render json: @comments 
    # end
    # def update
    #     @comment = Comment.find(params[:id]
    #     @comment.update!(city_params
        
    #     render json: @comment
    # end

    private
        def comment_params
            params.require(:comment).permit(:body)
        end

end


