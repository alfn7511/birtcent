<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
?>

</div> 
<!-- 본문 끝 -->

		<footer id="footer">
			<div class="container">
				<div class="logo"><img src="../img/logo-footer.jpg" alt="BRITCENT" /></div>
				<ul class="sns">
					<li><a href="#">facebook</a></li>
					<li><a href="#">naver</a></li>
					<li><a href="#">blog</a></li>
					<li><a href="#">youth</a></li>
				</ul>	
			</div>
			<div class="copyt">
				<div class="container">
					<p><strong>Copyright ⓒ 2015 <span>BRITCENT</span> Ltd. All rights reserved</strong></p>
					<p><strong>/ Address</strong>  Office Suite 3, 4 Bloomsbury Square, London  WC1A 2RP</p>
					<p><strong>/ TEL</strong> +44 (0)20 3802 1625</p>
					<p><strong>/ Company Number</strong> UK 9408130</p>
					<p><strong>/ CEO</strong> Daniel Shim</p>
					<p><strong>/ E-mail</strong> admin@britcent.com</p>
				</div>		
			</div>
		</footer>



<?php

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}

include_once(G5_THEME_PATH."/tail.sub.php");
?>