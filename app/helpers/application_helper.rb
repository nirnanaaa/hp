module ApplicationHelper
  def module_link(mod, target)
    optionalActive = ""

    if !@active.nil?
      if @active == mod
        optionalActive = "active"
      end
    end
    # response = $firebase.get("/menu/#{mod}")
    # if !response.success?
    #   return
    # end
    transMod = t mod
    (<<-EXIF
    <a
      href="#{target}"
      data-module="#{mod}"
      data-active-id="#{mod}"
      data-enabled="#{response}"
      title="#{transMod}"
      class="link #{optionalActive}"
    >
      #{transMod}
    </a>
    EXIF
    ).html_safe

      # <a href=""/#{transMod}".html_safe
  end
end
