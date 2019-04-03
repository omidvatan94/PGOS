require 'rails_helper'

RSpec.describe Order, type: :model do
  subject {
      described_class.new(coffee: "Bella Donovan", brew_method: "Aeropress",
                        ship_date: DateTime.now, cases: 1, packets_per: 25)
    }

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a coffee" do
      subject.coffee = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a brew_method" do
      subject.brew_method = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a ship_date" do
      subject.ship_date = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without cases" do
      subject.cases = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without packets_per" do
      subject.packets_per = nil
      expect(subject).to_not be_valid
    end
  end
