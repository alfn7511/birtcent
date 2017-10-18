<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once(G5_THEME_PATH.'/head.php');
?>
<header id="visual" class="community"><h1>커뮤니티</h1></header>
		<article id="community-content">
			<header class="container">
				<div class="comm-nav">
					<ul>
						<li<?php if(defined("_BBSMAIN_")) echo " class='on'"; ?>><a href="/community.php">메인</a></li>
						<li<?php if($bo_table=="notice") echo " class='on'"; ?>><a href="/bbs/board.php?bo_table=notice">공지사항</a></li>
						<li<?php if(defined("_FAQ_")) echo " class='on'"; ?>><a href="/bbs/faq.php">FAQ</a></li>
						<li<?php if($bo_table=="qa") echo " class='on'"; ?>><a href="/bbs/board.php?bo_table=qa">1:1문의</a></li>
						<li<?php if($bo_table=="review") echo " class='on'"; ?>><a href="/bbs/board.php?bo_table=review">후기 게시판</a></li>
						<li<?php if($bo_table=="free") echo " class='on'"; ?>><a href="/bbs/board.php?bo_table=free">자유 게시판</a></li>
					</ul>	
				</div>
			</header>
			<article>
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<fieldset class="search-box">
								<legend>사이트 내 전체검색</legend>
								<form name="fsearchbox" class="search-form">
					            	<input type="hidden" name="sfl" value="wr_subject||wr_content">
					            	<input type="hidden" name="sop" value="and">
					            	<label for="sch_stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
					            	<input type="text" name="stx" id="sch_stx" maxlength="20" placeholder="Search Britcent">
					            	<input type="submit" id="sch_submit" class="btn-search" value="검색">
					            </form>
							</fieldset>
							<div class="board-box o">
								<h2>자유 게시판 <span class="ico-smile">스마일아이콘</span></h2>
								<p>언제나 열려있는 브릿센트의 자유로운 소통 공간입니다.<a href="#" class="btn-comm-go"><img src="../img/btn-comm-go.png" alt="" /></a></p>
								
							</div>
						</div>
						<div class="col-sm-4 o">
								<a href="#" class="board-box">
									<img src="../img/ico-comm-faq.png" alt="FAQ" class="ico-img" />
									<h2>FAQ</h2>
									<p>카테고리 별 FAQ를 이용하시면 궁금한 점을 빠르게 확인하실 수 있습니다.</p>
								</a>
						</div>
						<div class="col-sm-4 o">
							<a href="#" class="board-box">
								<img src="../img/ico-comm-inquiry.png" alt="1:1문의" class="ico-img" />
								<h2>1:1문의</h2>
								<p>질문 및 문의 사항을 보내주시면 신속하게 처리해 드리겠습니다. </p>
							</a>
						</div>
					</div>
					
					<div class="row">
						<div class="col-sm-8">
							<div class="board-list">
								<h2>공지사항 <a href="#" class="btn-more-go">더보기</a></h2>
								<ul>
									<li><a href="#">새로운 선생님! 1+1 이벤트! 패키지 </a></li>
									<li><a href="#">서울에서 만나는 브릿센트~!! 콜린 선생님과 함께해요.  </a></li>
									<li><a href="#">영국 브릿센트가 홀본역쪽으로 새롭게 이전했습니다. 오셔서 축하해주세요. </a></li>
									<li><a href="#">사이트 개편으로 더욱 편리하게 이용할수 있게 되었습니다. </a></li>
									<li><a href="#">새로운 선생님! 1+1 이벤트! 패키지 </a></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4 o">
							<a href="#" class="board-box">
								<img src="../img/ico-comm-review.png" alt="후기 게시판" class="ico-img" />
								<h2>후기 게시판</h2>
								<p>브릿센트 수업을 함께하고 후기를 남겨주세요.</p>
							</a>
						</div>
					</div>
					
					<div class="row m">
						<div class="col-xs-6">
							<a href="#" class="board-box">
								<img src="../img/ico-comm-faq.png" alt="FAQ" class="ico-img" />
								<h2>FAQ</h2>
								<p>카테고리 별 FAQ를 이용하시면 궁금한 점을 빠르게 확인하실 수 있습니다.</p>
							</a>
						</div>
						<div class="col-xs-6">
							<a href="#" class="board-box">
								<img src="../img/ico-comm-inquiry.png" alt="1:1문의" class="ico-img" />
								<h2>1:1문의</h2>
								<p>질문 및 문의 사항을 보내주시면 신속하게 처리해 드리겠습니다. </p>
							</a>
						</div>
						<div class="col-xs-6">
							<a href="#" class="board-box">
								<img src="../img/ico-comm-review.png" alt="후기 게시판" class="ico-img" />
								<h2>후기 게시판</h2>
								<p>브릿센트 수업을 함께하고 후기를 남겨주세요.</p>
							</a>
						</div>
						<div class="col-xs-6">
							<a href="#" class="board-box noimg">
								<h2>자유 게시판 <span class="ico-smile">스마일아이콘</span></h2>
								<p>언제나 열려있는 브릿센트의 자유로운 소통 공간입니다.<img src="../img/btn-comm-go.png" alt="" class="btn-comm-go"/></p>
							</a>
						</div>
					</div>
				</div>
			</article>
		</article>
<?php
include_once(G5_THEME_PATH.'/tail.php');
?>