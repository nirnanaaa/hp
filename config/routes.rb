Rails.application.routes.draw do
  get 'legal/imprint'

  get 'my/contact'

  get 'my/projects'

  get 'my/about'

  get 'my/work'

  get 'my/development'

  root 'dashboard#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
