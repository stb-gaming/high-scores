module Jekyll
	module TitleCaseFilter
	  def titlecase(input)
		input.split.map(&:capitalize).join(' ')
	  end
	end
  end
  
  Liquid::Template.register_filter(Jekyll::TitleCaseFilter)
  