# Impact of bootstrap 4.0 upgrade

## Card Class name changes*

3.x Name for header has changed. 0ld class name of .card-heading is now .card-header I have been able to implement a pure css fix so no DOM changes should be required. 

*impacted components:*

	• CVQuality\Mvc\Views\ActivateNowWidget\Index.cshtml(14):   
	• CVQuality\Mvc\Views\CardWidget\Default.cshtml(6):   
	• CVQuality\Mvc\Views\Event\Detail.CVQuality.cshtml(10):     
	• CVQuality\Mvc\Views\Event\List.CVQualityEvents.cshtml(22):            
	• CVQuality\Mvc\Views\Event\List.CVQualityUndecoratedEvents.cshtml(22): 
	• CVQuality\Mvc\Views\InstitutionUpdateWidget\Index.cshtml(18):
	• CVQuality\Mvc\Views\LoginWidget\Index.cshtml(38):  
	• CVQuality\Mvc\Views\LoginWidget\Index.cshtml(94):
	• CVQuality\Mvc\Views\LoginWidget\Index.cshtml(135):
	• CVQuality\Mvc\Views\ProductWidget\Default.cshtml(68): 
	• CVQuality\Mvc\Views\RegisterWidget\Index.cshtml(277)
	• CVQuality\Mvc\Views\Shared\_EmailSubmission.cshtml(4):                                      
	• CVQuality\Mvc\Views\SingleCardWidget\Index.cshtml(7): 
	• CVQuality\Mvc\Views\TestimonialWidget\Default.cshtml(22):


## Card has replaced Panel, Wells

4.x no longer uses .panel structure and has replaced it to .card DOM for all items. Javascripts are connecting to objects so I am unable to do the above modification to fix this problem with a pure css fix.  Alteration must be done to each of these components. 

*impacted components:*

	• CVQuality\Mvc\Views\AccordionWidget\Default.cshtml(7):       
	• CVQuality\Mvc\Views\AdminAssessmentQuestions\Index.cshtml(51):
	• CVQuality\Mvc\Views\AdminAssessmentQuestions\Index.cshtml(109):
	• CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(81):
	* CVQuality\Mvc\Views\CQC_PracticeAdminWidget\Default.cshtml(167):
	• CVQuality\Mvc\Views\HospitalEnrollmentWidget\Index.cshtml(6):  
	• CVQuality\Mvc\Views\MoreLinkWidget\Default.cshtml(7): 
	• CVQuality\Mvc\Views\ProductWidget\Default.cshtml(24):
	• CVQuality\Mvc\Views\ShareYourStoryWidget\Index.cshtml(6):  
	• CVQuality\Mvc\Views\ToolkitWidget\Default.cshtml(9):




## Progress bar uses utility class

Progress bars no longer use the .progress-bar-{state} classes for coloring but now use the utlity classes bg-{state}

*impacted components:*

	*   CVQuality\Mvc\Views\AssessmentWidget\Default.cshtml(51)


## Progress bar changed animated class

Progress bars no longer use the .active classes for animation but now use the .progress-bar-animated

*impacted components:*

	*   CVQuality\Mvc\Views\AssessmentWidget\Default.cshtml(51)



## Display and Hidden altered to { d-none, d-block, d-inline }

Display classess have changed to a shortened class name.  

*impacted components are incomplete and usage could be expanded into the content view:*

	* CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(22)
	* CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(44)
	* CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(112)
	* CVQuality\Mvc\Views\Breadcrumb\Breadcrumb.Cvquality.cshtml(3)
	* CVQuality\Mvc\Views\Layouts\BaseLayout.cshtml(73)
	* CVQuality\Mvc\Views\Layouts\BaseLayout.cshtml(101)
	* CVQuality\Mvc\Views\Navigation\NavigationView.CvqualityHorizontal.cshtml(9)
	* CVQuality\Mvc\Views\Navigation\NavigationView.CvqualityVertical.cshtml(20)
	* CVQuality\Mvc\Views\Shared\_EmailSubmission.cshtml(14)
	* CVQuality\Mvc\Views\Shared\_EmailSubmission.cshtml(25)
	* CVQuality\Mvc\Views\SlideShowWidget\Default.cshtml(6)


## Inline Forms need utilty classes to fix alignment issues. 

No longer is there an line form alignment styles and is fixes by using utility classes like mb-2 to alter bottom margins to align content. 

*impacted components:*

	* currently undiscovered in project.


## Checkmarks have new DOM. 

Checkmarks now use a more BEM sturcture to the DOM and not altering it will make checkmarks colide with the label. Checkmarks now wrap both label and input int there own classes form-check-input and form-check-label.  

*impacted components:*

	* CVQuality\Mvc\Views\AdminAssessmentQuestions\Index.cshtml(321):
	* CVQuality\Mvc\Views\HospitalEnrollmentWidget\Index.cshtml(100):  
	* CVQuality\Mvc\Views\SlideShowWidget\DesignerView.Simple.cshtml(24):   
	* CVQuality\Mvc\Views\SlideShowWidget\DesignerView.Simple.cshtml(31): 
	* CVQuality\Mvc\Views\SlideShowWidget\DesignerView.Simple.cshtml(38):  
	* CVQuality\Mvc\Views\AssessmentWidget\Default.cshtml(32):   


## State classes for form validations have changed with altered DOM
has-warning no longer exsists and both has-success and has-error have been changed to is-valid and is-invalid. Messages are now held in feedback-invalid and feedback-valid divs.   

*impacted components:*

	* All Forms USING BOOTSRAP 4.0 STYLES
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\AccordionWidget\DesignerView.Simple.cshtml(3): 
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\AssessmentResultsWidget\Default.cshtml(29):  
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\AssessmentSplashWidget\Default.cshtml(35): 
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\CardWidget\DesignerView.Simple.cshtml(5):  
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\CardWidget\DesignerView.Simple.cshtml(15): 
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\CardWidget\DesignerView.Simple.cshtml(19):  
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\CardWidget\DesignerView.Simple.cshtml(23):  
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\CardWidget\DesignerView.Simple.cshtml(32): 
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\DividerBreak\DesignerView.Simple.cshtml(6): 
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\FacilityMapWidget\Default.cshtml(30)
	* C:\tfsonline\cvqualitySCPC\CVQuality\Mvc\Views\FacilityMapWidget\Default.cshtml(39):
	* ...


##  File Upload is now a custom form and should be swapped out when needed.

Updated custom form elements now use class custom-file and other needed DOM

*impacted components:*

	* ???


## Carousel New DOM and Javascript
new dom and structure of the carousel 

*impacted components:*

	* \CVQuality\Mvc\Views\SlideShowWidget\Default.cshtml

## Card Footer and Card Action
The containers now have a subtle differnce where .card-action has mor padding and makes buttons larger by default. 

	* \CVQuality\Mvc\Views\Event\Default.cshtml