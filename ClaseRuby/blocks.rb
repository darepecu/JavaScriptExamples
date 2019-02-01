class PizzaFactory
  CRUST = ['normal', 'crispy']
  TOPPINGS =[
    'tomato',
    'Pepperoni',
    'Pineapple'
  ]

  def create_pizza(crust, toppings)
    preparate_pizza(crust, toppings) do |pizza|
      pizza << toppings
    end
  end

  private

  def preparate_pizza(crust)
    pizza = []
    pizza << "Crust: #{crust}"
    pizza << "Cheese"
    pizza << "Toppings: #{toppings.inspect}"
    if block_given?
        yield pizza
    else
        pizza << TOPPINGS.sample(2)
    end
  end
end

pizza_factory = PizzaFactory.new
pizza_factory.create_pizza(PizzaFactory::CRUST.sample, PizzaFactory::TOPPINGS.sample(3))
