class DashboardController < ApplicationController
  def index
    @active = "React.Dashboard"
    @css_optional = "backgrounded"
    @hideFooter = true
  end
end
