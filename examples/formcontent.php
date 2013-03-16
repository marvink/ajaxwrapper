<div style="width:500px; padding:10px; height:200px; color:#FFF; background:#F90">
Form Content

<dl>
	<dt>Title:</dt>
    <dd><?=$_REQUEST['title']?></dd>
    <dt>First Name:</dt>
    <dd><?=$_REQUEST['firstname']?></dd>
    <dt>Button:</dt>
    <dd><?=$_REQUEST['firstbutton'] ? "firstbutton" : ""?><?=$_REQUEST['secondbutton'] ? "secondbutton" : ""?></dd>
    <dt>Newsletter:</dt>
    <dd><?=$_REQUEST['newsletter']?></dd>
    <dt>Interest:</dt>
    <dd>
    <?php
	if(!empty($_REQUEST['interest'])) {
		foreach($_REQUEST['interest'] as $interest) {
			echo $interest.",";
		}
	}
	?>
    </dd>
    <dt>Filename:</dt>
    <dd><?=$_FILES['file']['name']?></dd>
</dl>
</div>

<style>
dd,dt {
	width:50%;
	float:left;
	display:block;
	margin:0px;    
	min-height: 24px;
}	
</style>
