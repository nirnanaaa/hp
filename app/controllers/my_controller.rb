class MyController < ApplicationController
  def contact
    @active = 'React.Edges.Contact'
    @title = "Get in touch."
    @subtitle = "I am driven by creating experiences that deliver results
    for your business and for your consumers."
  end

  def projects
    @active = 'React.Edges.Projects'
    @title = "This is what I love to do."
    @subtitle = "It's the job that is never started that takes longest to finish - J.R.R Tolkien"

  end

  def about
    @active = 'React.Edges.About'
    @title = "Developer. Architect. Mentor. Athlete"
    @subtitle = "Most people give up just when they’re about to achieve success. They quit on the one yard line. They give up at the last minute of the game one foot from a winning touchdown. - Ross Perot"
  end

  def work
    @active = 'React.Edges.Work'
  end

  def development
    @active = 'React.Edges.Development'
  end
end
