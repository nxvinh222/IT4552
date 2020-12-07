class V1::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render json:{
        username: @user.username,
        shop_id: @user.shop_id,
        admin: false
      }, status: :created
    else
      render json: {
        message: "Sign up fail"
      }, status: :ok
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :shop_id)
  end

end
