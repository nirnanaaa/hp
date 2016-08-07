Rails.application.routes.draw do
  get 'legal/imprint'

  get 'my/contact'
  post 'my/contact-me' => 'my#contactSend'

  get 'my/projects'

  get 'my/about'

  get 'my/work'

  get 'my/development'

  root 'dashboard#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
