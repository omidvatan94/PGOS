class Order < ApplicationRecord
  validates :coffee, presence: true
  validates :brew_method, presence: true
  validates :ship_date, presence: true
  validates :cases, numericality: {greater_than: 0}
  validates :packets_per, presence: true

end
