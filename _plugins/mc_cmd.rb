module Jekyll
    class RenderTimeTagBlock < Liquid::Tag
  
      def initialize(tag_name, text, tokens)
        super
        @text = text
      end
  
      def render(context)
        "<span class=\"mc_cmd\">#{@text}</span>"
      end
    end
  end
  
  Liquid::Template.register_tag('mc_cmd', Jekyll::RenderTimeTagBlock)