# Impact of bootstrap 4.0 upgrade

## Card Class name changes
*PURE CSS FIX*
3.x Name for header has changed.  0ld class name of `.card-heading` is now `.card-header` 
#### implacted compontents:	

	* CVQuality\Mvc\Views\ActivateNowWidget\Index.cshtml(14):   
	* CVQuality\Mvc\Views\CardWidget\Default.cshtml(6):   
	* CVQuality\Mvc\Views\Event\Detail.CVQuality.cshtml(10):     
	* CVQuality\Mvc\Views\Event\List.CVQualityEvents.cshtml(22):            
	* CVQuality\Mvc\Views\Event\List.CVQualityUndecoratedEvents.cshtml(22): 
	* CVQuality\Mvc\Views\InstitutionUpdateWidget\Index.cshtml(18):
	* CVQuality\Mvc\Views\LoginWidget\Index.cshtml(38):  
	* CVQuality\Mvc\Views\LoginWidget\Index.cshtml(94):
	* CVQuality\Mvc\Views\LoginWidget\Index.cshtml(135):
	* CVQuality\Mvc\Views\ProductWidget\Default.cshtml(68): 
	* CVQuality\Mvc\Views\RegisterWidget\Index.cshtml(277)
	* CVQuality\Mvc\Views\Shared\_EmailSubmission.cshtml(4):
	* CVQuality\Mvc\Views\SingleCardWidget\Index.cshtml(7): 
	* CVQuality\Mvc\Views\TestimonialWidget\Default.cshtml(22):

## Card has replaced Panel
*DOM MODIFICATION NEED ON WEB COMPONENTS*
 4.x no longer uses .panel structure and has replaced it to .card DOM for all items.
	
#### impacted components:		
	
	* CVQuality\Mvc\Views\AccordionWidget\Default.cshtml(7):       
	* CVQuality\Mvc\Views\AdminAssessmentQuestions\Index.cshtml(51):
	* CVQuality\Mvc\Views\AdminAssessmentQuestions\Index.cshtml(109):
	* CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(81):
	* CVQuality\Mvc\Views\HospitalEnrollmentWidget\Index.cshtml(6):  
	* CVQuality\Mvc\Views\MoreLinkWidget\Default.cshtml(7):	
	* CVQuality\Mvc\Views\ProductWidget\Default.cshtml(24):
	* CVQuality\Mvc\Views\ShareYourStoryWidget\Index.cshtml(6):  
	* CVQuality\Mvc\Views\ToolkitWidget\Default.cshtml(9):