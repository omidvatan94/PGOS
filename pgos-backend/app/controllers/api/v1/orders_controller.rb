class Api::V1::OrdersController < ApplicationController

  def index
    @orders = Order.all
    render json: @orders
  end

  def create
    @order = Order.create(order_params)
    if @order.save
        render json: @order
    else
        render json: { error: 'TRY AGAIN'}, status: 422
    end
  end

  def show
    @order = Order.find(params[:id])
    render json: @order
  end 


  private

  def order_params
    params.permit(:coffee, :brew_method, :ship_date, :cases, :packets_per, :notes, :priority)
  end

end
