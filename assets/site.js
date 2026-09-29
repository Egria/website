
    (() => {
      const root = document.getElementById('experience-projects-corner');
      const canvas = root.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      ctx.scale(2,2);
      let seed=9361;
      const rand=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646;};
      const ellipse=(x,y,rx,ry,color)=>{ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();};
      const fur=(x,y,rx,ry,count,light)=>{
        const grad=ctx.createRadialGradient(x-rx*.3,y-ry*.35,rx*.04,x+rx*.25,y+ry*.3,ry*1.4);
        grad.addColorStop(0,light?'#ffffff':'#eeede9');grad.addColorStop(.48,light?'#f2f1ed':'#e0dfd8');grad.addColorStop(1,light?'#cfcec6':'#b8b9af');
        ellipse(x,y,rx,ry,grad);
        for(let i=0;i<count;i++){
          const a=rand()*Math.PI*2, radius=Math.sqrt(rand());
          const px=x+Math.cos(a)*rx*radius,py=y+Math.sin(a)*ry*radius;
          const length=2+rand()*5,drift=(rand()-.5)*1.7;
          const direction=a*.62+Math.PI*.2+(rand()-.5)*1.4;
          const sx=Math.cos(direction)*length,sy=Math.sin(direction)*length;
          const brightness=light?95:88; const shade=brightness+rand()*7-radius*8-(py-y)/ry*4;
          ctx.strokeStyle=`hsla(${40+rand()*10},${light?7:6}%,${shade}%,${.25+rand()*.35})`;
          ctx.lineWidth=.35+rand()*.65;ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(px+sx*.5+drift,py+sy*.35,px+sx,py+sy);ctx.stroke();
        }
        for(let i=0;i<1200;i++){
          const a=rand()*Math.PI*2,px=x+Math.cos(a)*rx*(.96+rand()*.03),py=y+Math.sin(a)*ry*(.96+rand()*.03);
          const l=2+rand()*6;ctx.strokeStyle=light?'rgba(218,218,211,.45)':'rgba(198,199,190,.45)';ctx.lineWidth=.4;ctx.beginPath();ctx.moveTo(px,py);ctx.quadraticCurveTo(px+Math.cos(a)*l*.3-1,py+Math.sin(a)*l*.7,px+Math.cos(a+.1)*l,py+Math.sin(a+.1)*l);ctx.stroke();
        }
      };
      ctx.save();ctx.filter='blur(9px)';ellipse(219,321,83,9,'#555b481c');ctx.restore();
      // A curled tail, with short fibers following its curve.
      ctx.lineCap='round';ctx.lineWidth=27;ctx.strokeStyle='#e4e3dd';ctx.beginPath();ctx.moveTo(244,287);ctx.bezierCurveTo(313,319,333,283,313,240);ctx.stroke();
      for(let i=0;i<2200;i++){const t=rand(),u=1-t;const x=u*u*u*244+3*u*u*t*313+3*u*t*t*333+t*t*t*313;const y=u*u*u*287+3*u*u*t*319+3*u*t*t*283+t*t*t*240;const a=rand()*Math.PI*2,r=rand()*13;ctx.strokeStyle=`rgba(247,246,241,${.35+rand()*.4})`;ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r);ctx.lineTo(x+Math.cos(a)*(r+5),y+Math.sin(a)*(r+5));ctx.stroke();}
      fur(201,263,69,56,4000,false);
      fur(169,306,27,14,650,true);fur(227,306,27,14,650,true);
      const ear=(a,b,c)=>{
        ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.lineTo(...c);ctx.closePath();ctx.fillStyle='#e4e2dd';ctx.fill();
        for(let i=0;i<1400;i++){let u=rand(),v=rand();if(u+v>1){u=1-u;v=1-v;}const x=a[0]+(b[0]-a[0])*u+(c[0]-a[0])*v,y=a[1]+(b[1]-a[1])*u+(c[1]-a[1])*v;ctx.strokeStyle=`rgba(251,250,246,${.35+rand()*.5})`;ctx.lineWidth=.7;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+(rand()-.5)*5,y-2-rand()*5);ctx.stroke();}
      };
      ear([133,173],[137,99],[183,145]);ear([214,141],[259,98],[268,177]);
      ctx.fillStyle='#e8d8d3';ctx.beginPath();ctx.moveTo(143,143);ctx.lineTo(145,115);ctx.lineTo(167,144);ctx.fill();ctx.beginPath();ctx.moveTo(236,140);ctx.lineTo(253,114);ctx.lineTo(258,151);ctx.fill();
      fur(199,186,70,55,5200,true);
      // Soft chest and two front paws keep the silhouette recognizably feline.
      fur(187,255,24,38,1250,true);fur(213,255,24,38,1250,true);
      fur(183,307,18,11,450,true);fur(216,307,18,11,450,true);
      const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
      let paused=reduce.matches;
      const motion=root.querySelector('.sc-motion');
      const applyMotion=()=>{root.classList.toggle('sc-quiet',paused);motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Resume animations':'Pause animations');motion.firstElementChild.textContent=paused?'▷':'Ⅱ';};
      applyMotion();motion.addEventListener('click',()=>{paused=!paused;applyMotion();});
      reduce.addEventListener('change',e=>{paused=e.matches;applyMotion();});
      const face=root.querySelector('.sc-face'),plush=root.querySelector('.sc-plush-button');
      root.addEventListener('pointermove',e=>{if(paused||reduce.matches)return;const b=plush.getBoundingClientRect();if(!b.width)return;const dx=Math.max(-5,Math.min(5,(e.clientX-b.x-b.width/2)/50)),dy=Math.max(-3,Math.min(3,(e.clientY-b.y-b.height*.6)/70));face.style.setProperty('--look-x',dx+'px');face.style.setProperty('--look-y',dy+'px');});
      root.addEventListener('pointerleave',()=>{face.style.setProperty('--look-x','0px');face.style.setProperty('--look-y','0px');});
      let petTimer;
      plush.addEventListener('click',()=>{const note=root.querySelector('.sc-stage-note');clearTimeout(petTimer);note.textContent='purrr… hello ♡';if(!paused&&!reduce.matches){plush.animate([{transform:'scale(1,1)'},{transform:'scale(1.025,.97) translateY(2px)'},{transform:'scale(.99,1.015) translateY(-3px)'},{transform:'scale(1,1)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)'});const heart=document.createElement('span');heart.className='sc-heart';heart.textContent='♡';heart.setAttribute('aria-hidden','true');root.querySelector('.sc-stage').appendChild(heart);heart.addEventListener('animationend',()=>heart.remove(),{once:true});setTimeout(()=>heart.remove(),1300);}petTimer=setTimeout(()=>note.textContent='a quiet little companion.',2600);});
      const hoverCapable=window.matchMedia('(any-hover: hover)');
      const resetProjectPreviews=[];
      root.querySelectorAll('.sc-project, .sc-story').forEach(project=>{
        const toggle=project.querySelector('.sc-project-toggle');
        const panel=project.querySelector('.sc-project-body');
        const label=project.querySelector('.sc-pin-label');
        const name=toggle.firstElementChild.textContent;
        let hovered=false,pinned=false,focusPreview=false;
        const render=()=>{
          const open=pinned||hovered||focusPreview;
          project.classList.toggle('is-open',open);
          project.classList.toggle('is-pinned',pinned);
          toggle.setAttribute('aria-expanded',String(open));
          toggle.setAttribute('aria-pressed',String(pinned));
          toggle.setAttribute('aria-label',(pinned?'Unpin ':'Pin open ')+name);
          panel.setAttribute('aria-hidden',String(!open));
          panel.inert=!open;
          label.textContent=pinned?'Pinned':'Pin';
        };
        const togglePin=()=>{
          pinned=!pinned;hovered=false;focusPreview=false;render();
          root.querySelector('.sc-live-message').textContent=name+(pinned?' pinned open.':' unpinned.');
        };
        project.addEventListener('pointerenter',event=>{
          if(event.pointerType==='touch'||!hoverCapable.matches)return;
          hovered=true;render();
        });
        project.addEventListener('pointerleave',()=>{hovered=false;render();});
        toggle.addEventListener('click',togglePin);
        project.addEventListener('project:pin',()=>{pinned=true;hovered=false;focusPreview=false;render();});
        project.addEventListener('click',event=>{
          if(event.target.closest('button,a,input,select,textarea,summary'))return;
          const selection=window.getSelection();
          if(selection&&!selection.isCollapsed)return;
          togglePin();
        });
        project.addEventListener('focusin',event=>{
          if(event.target.matches(':focus-visible')){focusPreview=true;render();}
        });
        project.addEventListener('focusout',()=>{
          queueMicrotask(()=>{if(!project.contains(document.activeElement)){focusPreview=false;render();}});
        });
        project.addEventListener('keydown',event=>{
          if(event.key!=='Escape')return;
          event.preventDefault();
          if(panel.contains(document.activeElement))toggle.focus();
          hovered=false;pinned=false;focusPreview=false;render();
          root.querySelector('.sc-live-message').textContent=name+' closed.';
        });
        resetProjectPreviews.push(()=>{hovered=false;focusPreview=false;render();});
        render();
      });
      root.querySelectorAll('.sc-buoy-band').forEach(band=>{
        const buttons=[...band.querySelectorAll('.sc-buoy')];
        const panel=band.querySelector('.sc-buoy-panel');
        const title=panel.querySelector('h3');
        const pin=panel.querySelector('.sc-buoy-pin-toggle');
        const live=root.querySelector('.sc-buoy-live');
        title.id=panel.id+'-heading';
        panel.setAttribute('role','region');
        panel.setAttribute('aria-labelledby',title.id);
        let preview=null,pinned=null,focused=null,active=null,hideTimer,panelHovered=false;
        const cancelHide=()=>clearTimeout(hideTimer);
        const render=()=>{
          active=preview||focused||pinned;
          panel.classList.toggle('is-open',Boolean(active));
          panel.setAttribute('aria-hidden',String(!active));
          panel.inert=!active;
          buttons.forEach(button=>{
            button.setAttribute('aria-expanded',String(button===active));
            button.setAttribute('aria-pressed',String(button===pinned));
          });
          if(!active)return;
          const item=active.dataset;
          panel.querySelector('.sc-history-date').textContent=item.dates;
          title.textContent=item.title;
          panel.querySelector('.sc-detail-org').textContent=item.org;
          const place=panel.querySelector('.sc-detail-meta');
          place.textContent=item.place||'';place.hidden=!item.place;
          const supervisor=panel.querySelector('.sc-detail-supervisor');
          const supervisorLink=supervisor.querySelector('a');
          supervisor.hidden=!item.supervisor;
          supervisorLink.querySelector('span').textContent=item.supervisor||'';
          supervisorLink.href=item.supervisorUrl;
          supervisorLink.setAttribute('aria-label',item.supervisor+' — external profile (opens in a new tab)');
          const related=panel.querySelector('.sc-detail-project');
          const projectLink=related.querySelector('a');
          related.hidden=!item.relatedProject;
          projectLink.dataset.project=item.relatedProject||'';
          projectLink.querySelector('span').textContent=item.relatedProjectLabel||'';
          if(item.relatedProject){
            projectLink.setAttribute('href','#research-'+item.relatedProject);
            projectLink.setAttribute('aria-label','Explore '+item.relatedProjectLabel+' in Research');
          }else{
            projectLink.removeAttribute('href');
            projectLink.removeAttribute('aria-label');
          }
          const note=panel.querySelector('.sc-detail-note');
          note.textContent=item.note||'';note.hidden=!item.note;
          const isPinned=active===pinned;
          pin.setAttribute('aria-pressed',String(isPinned));
          pin.querySelector('span').textContent=isPinned?'Unpin':'Pin open';
          panel.querySelector('.sc-buoy-status').textContent=isPinned?'Pinned':'Preview';
        };
        const togglePin=button=>{
          cancelHide();
          if(pinned===button&&panel.contains(document.activeElement))button.focus();
          pinned=pinned===button?null:button;
          preview=null;focused=null;
          render();
          live.textContent=button.dataset.org+(pinned?' pinned open.':' closed.');
        };
        const close=()=>{
          cancelHide();
          const previous=active;
          if(panel.contains(document.activeElement)&&previous)previous.focus();
          preview=null;pinned=null;focused=null;panelHovered=false;render();
          live.textContent='Experience details closed.';
        };
        buttons.forEach(button=>{
          button.addEventListener('pointerenter',event=>{
            if(event.pointerType==='touch'||!hoverCapable.matches)return;
            cancelHide();preview=button;render();
          });
          button.addEventListener('pointerleave',()=>{
            cancelHide();hideTimer=setTimeout(()=>{if(!panelHovered){preview=null;render();}},220);
          });
          button.addEventListener('focus',()=>{
            if(button.matches(':focus-visible')){cancelHide();preview=null;focused=button;render();}
          });
          button.addEventListener('click',()=>togglePin(button));
        });
        panel.addEventListener('pointerenter',event=>{
          if(event.pointerType==='touch')return;
          panelHovered=true;cancelHide();
        });
        panel.addEventListener('pointerleave',()=>{panelHovered=false;preview=null;render();});
        band.addEventListener('pointerleave',()=>{cancelHide();panelHovered=false;preview=null;render();});
        band.addEventListener('focusout',()=>queueMicrotask(()=>{
          if(!band.contains(document.activeElement)){focused=null;render();}
        }));
        band.addEventListener('keydown',event=>{
          if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close();}
        });
        pin.addEventListener('click',()=>{if(active)togglePin(active);});
        panel.querySelector('.sc-buoy-close').addEventListener('click',close);
        resetProjectPreviews.push(()=>{cancelHide();preview=null;focused=null;panelHovered=false;render();});
        render();
      });
      const navigate=(name,projectId,{updateUrl=true,scroll=true}={})=>{
        const shown=root.querySelector('[data-view="'+name+'"]');
        if(!shown)return;
        resetProjectPreviews.forEach(reset=>reset());
        root.querySelectorAll('[data-view]').forEach(view=>view.hidden=view!==shown);
        root.querySelectorAll('.sc-nav [data-page]').forEach(nav=>nav.setAttribute('aria-pressed',String(nav.dataset.page===name)));
        const hash='#'+name+(projectId?'-'+projectId:'');
        if(updateUrl&&location.hash!==hash)history.pushState(null,'',hash);
        const target=projectId?shown.querySelector('[data-detail="'+projectId+'"]'):null;
        if(target){
          target.dispatchEvent(new Event('project:pin'));
          target.querySelector('.sc-project-toggle').focus({preventScroll:true});
          requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:paused||reduce.matches?'auto':'smooth'}));
        }else if(scroll){
          window.scrollTo({top:0,behavior:'instant'});
        }
        if(!paused&&!reduce.matches)shown.animate([{opacity:.3,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:300,easing:'ease-out'});
      };
      root.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',event=>{
        if(button.tagName==='A'&&(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey))return;
        // Capture a shared card's destination before resetting its preview.
        const name=button.dataset.page;
        const projectId=button.dataset.project;
        if(button.tagName==='A')event.preventDefault();
        navigate(name,projectId);
      }));
      const restoreRoute=()=>{
        const route=/^#(home|research|play|about)(?:-(palma|gamma|llm|serverless))?$/.exec(location.hash);
        navigate(route?route[1]:'home',route&&route[1]==='research'?route[2]:null,{updateUrl:false,scroll:false});
      };
      window.addEventListener('popstate',restoreRoute);
      window.addEventListener('hashchange',restoreRoute);
      restoreRoute();
    })();
  