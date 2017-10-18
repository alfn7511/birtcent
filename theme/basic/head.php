<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가


include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>


    <h1 id="hd_h1"><?php echo $g5['title'] ?></h1>

    <div id="skip_to_container"><a href="#container">본문 바로가기</a></div>

    <?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
    ?>
	<div id="top-btn">	<a href="#">맨위로 스크롤</a></div>
	<nav class="nav-primary" id="navPrimary">
		<div class="container-fluid">
			<div class="util clearfix">
				<a href="/" class="btn-home-go"><img src="../img/btn-home-go.png" alt="" /></a>
				<a href="#" class="btn-all-menu"><img src="../img/btn-all-menu.png" alt="" /></a>
			</div>
			<?php if(defined('_INDEX_')) { // index에서만 실행 ?>
			<div id="breadcrumb">
				<div class="fold"><a href="#" title="플로팅 메뉴 열기"> </a></div>
				<ul>
					<li><a href="#header" id="m1" class="active"><em>Intro</em><span> </span></a></li>
					<li><a href="#why-britcent" id="m2"><em>Why britcent</em><span> </span></a></li>
					<li><a href="#whenever" id="m3"><em>Whenever wherever</em><span> </span></a></li>
					<li><a href="#tutor" id="m4"><em>Tutor</em><span> </span></a></li>
					<li><a href="#review" id="m5"><em>Review</em><span> </span></a></li>
					<li><a href="#trial-apply" id="m6"><em>트라이얼 신청하기</em><span> </span></a></li>
				</ul>
			</div>
			<?php } ?>
			<div class="all-menu-list">
				<ul>
					<?php
		            $sql = " select *
		                        from {$g5['menu_table']}
		                        where me_use = '1'
		                          and length(me_code) = '2'
		                        order by me_order, me_id ";
		            $result = sql_query($sql, false);
		            $gnb_zindex = 999; // gnb_1dli z-index 값 설정용
		
		            for ($i=0; $row=sql_fetch_array($result); $i++) {
		            ?>
					<li style="z-index:<?php echo $gnb_zindex--; ?>">
						<a href="<?php echo $row['me_link']; ?>" target="_<?php echo $row['me_target']; ?>"><?php echo $row['me_name'] ?></a>
					<?php
		                $sql2 = " select *
		                            from {$g5['menu_table']}
		                            where me_use = '1'
		                              and length(me_code) = '4'
		                              and substring(me_code, 1, 2) = '{$row['me_code']}'
		                            order by me_order, me_id ";
		                $result2 = sql_query($sql2);
		
		                for ($k=0; $row2=sql_fetch_array($result2); $k++) {
		                    if($k == 0)
		                        echo '<ul class="gnb_2dul">'.PHP_EOL;
		                ?>
		                    <li class="gnb_2dli"><a href="<?php echo $row2['me_link']; ?>" target="_<?php echo $row2['me_target']; ?>" class="gnb_2da"><?php echo $row2['me_name'] ?></a></li>
                <?php
		                }
		
                if($k > 0)
                    echo '</ul>'.PHP_EOL;
                ?>
            </li>
            <?php
            }
            if ($i == 0) {  ?>
                <li id="gnb_empty">메뉴 준비 중입니다.<?php if ($is_admin) { ?> <br><a href="<?php echo G5_ADMIN_URL; ?>/menu_list.php">관리자모드 &gt; 환경설정 &gt; 메뉴설정</a>에서 설정하실 수 있습니다.<?php } ?></li>
            <?php } ?>
				</ul>	
			</div>
		</div>
	</nav>
	<!-- 본문시작 -->
	<div id="wrap">