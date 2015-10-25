<?php
 
$files = glob("uploads/*.*");
 
for ($i=1; $i<count($files); $i++)
 
{
 
	$image = $files[$i];
	 
	print $image ."<br />";
	echo '<img src="'.$image .'" alt="Random image" />'."<br /><br />";
}
 
?>
