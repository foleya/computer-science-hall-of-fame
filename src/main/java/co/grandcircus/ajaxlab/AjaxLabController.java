package co.grandcircus.ajaxlab;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AjaxLabController {

	@RequestMapping("/science-hall-of-fame")
	public ModelAndView starwarsPages() {
		return new ModelAndView("science-hall-of-fame");
	}
	
}
