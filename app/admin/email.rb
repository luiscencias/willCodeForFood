ActiveAdmin.register_page "Email" do
  def submit
    puts "Submitted yo"
  end

  content do
    para "Hello"
  end
end