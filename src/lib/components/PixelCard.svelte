<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import '../css/PixelCard.css';

  class Pixel {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    color: string;
    speed: number;
    size: number;
    sizeStep: number;
    minSize: number;
    maxSizeInteger: number;
    maxSize: number;
    delay: number;
    counter: number;
    counterStep: number;
    isIdle: boolean;
    isReverse: boolean;
    isShimmer: boolean;

    constructor(
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      color: string,
      speed: number,
      delay: number
    ) {
      this.width = canvas.width;
      this.height = canvas.height;
      this.ctx = context;
      this.x = x;
      this.y = y;
      this.color = color;
      this.speed = this.getRandomValue(0.1, 0.9) * speed;
      this.size = 0;
      this.sizeStep = Math.random() * 0.4;
      this.minSize = 0.5;
      this.maxSizeInteger = 2;
      this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
      this.delay = delay;
      this.counter = 0;
      this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
      this.isIdle = false;
      this.isReverse = false;
      this.isShimmer = false;
    }

    getRandomValue(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    draw() {
      const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(
        this.x + centerOffset,
        this.y + centerOffset,
        this.size,
        this.size
      );
    }

    appear() {
      this.isIdle = false;
      if (this.counter <= this.delay) {
        this.counter += this.counterStep;
        return;
      }
      if (this.size >= this.maxSize) {
        this.isShimmer = true;
      }
      if (this.isShimmer) {
        this.shimmer();
      } else {
        this.size += this.sizeStep;
      }
      this.draw();
    }

    disappear() {
      this.isShimmer = false;
      this.counter = 0;
      if (this.size <= 0) {
        this.isIdle = true;
        return;
      } else {
        this.size -= 0.1;
      }
      this.draw();
    }

    shimmer() {
      if (this.size >= this.maxSize) {
        this.isReverse = true;
      } else if (this.size <= this.minSize) {
        this.isReverse = false;
      }
      if (this.isReverse) {
        this.size -= this.speed;
      } else {
        this.size += this.speed;
      }
    }
  }

  function getEffectiveSpeed(value: number, reducedMotion: boolean) {
    const min = 0;
    const max = 100;
    const throttle = 0.001;

    if (value <= min || reducedMotion) {
      return min;
    } else if (value >= max) {
      return max * throttle;
    } else {
      return value * throttle;
    }
  }

  const VARIANTS = {
    default: {
      activeColor: null,
      gap: 3,
      speed: 60,
      colors: '#f8fafc,#f1f5f9,#cbd5e1',
      noFocus: false
    },
    docker: {
      activeColor: '#2496ed',
      gap: 4,
      speed: 80,
      colors: '#2496ed,#61dafb,#0db7ed',
      noFocus: false
    },
    react: {
      activeColor: '#61dafb',
      gap: 4,
      speed: 80,
      colors: '#61dafb,#20232a,#0db7ed',
      noFocus: false
    },
    laravel: {
      activeColor: '#ff2d20',
      gap: 4,
      speed: 80,
      colors: '#FF2050,#FB2464,#f87171',
      noFocus: false
    },
    sceneBuilder: {
      activeColor: '#ff6f00',
      gap: 4,
      speed: 80,
      colors: '#ff6f00,#ffb300,#ffd54f',
      noFocus: false
    },
    tailwind: {
      activeColor: '#06b6d4',
      gap: 4,
      speed: 80,
      colors: '#06b6d4,#22d3ee,#67e8f9',
      noFocus: false
    },
    bootstrap: {
      activeColor: '#6610f2',
      gap: 4,
      speed: 80,
      colors: '#6610f2,#a78bfa,#c4b5fd',
      noFocus: false
    },
    mysql: {
      activeColor: '#00758f',
      gap: 4,
      speed: 80,
      colors: '#00758f,#22d3ee,#ff6f00',
      noFocus: false
    },
    pgsql: {
      activeColor: '#336791',
      gap: 4,
      speed: 80,
      colors: '#336791,#22d3ee,#67e8f9',
      noFocus: false
    }, 
    svelte: {
      activeColor: '#f97316',
      gap: 4,
      speed: 80,
      colors: '#f97316,#fb923c,#fdba74',
      noFocus: false
    },
    java: {
      activeColor: '#f97316',
      gap: 4,
      speed: 80,
      colors: '#f97316,#fb923c,#6092B3',
      noFocus: false
    },
    js: {
      activeColor: '#facc15',
      gap: 4,
      speed: 80,
      colors: '#facc15,#fde68a,#fef3c7',
      noFocus: false
    },
    ts: {
      activeColor: '#3178c6',
      gap: 4,
      speed: 80,
      colors: '#3178c6,#93c5fd,#bfdbfe',
      noFocus: false
    }
  } as const;

    export let variant: keyof typeof VARIANTS = 'default';
    export let gap: number | undefined = undefined;
    export let speed: number | undefined = undefined;
    export let colors: string | undefined = undefined;
    export let noFocus: boolean | undefined = undefined;
    export let className: string = '';

  let containerRef: HTMLDivElement | null = null;
  let canvasRef: HTMLCanvasElement | null = null;

  let pixels: Pixel[] = [];
  let animationId: number | null = null;
  let timePrevious = performance.now();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $: variantCfg = VARIANTS[variant] ?? VARIANTS.default;
  $: finalGap = gap ?? variantCfg.gap;
  $: finalSpeed = speed ?? variantCfg.speed;
  $: finalColors = colors ?? variantCfg.colors;
  $: finalNoFocus = noFocus ?? variantCfg.noFocus;

  function initPixels() {
    if (!containerRef || !canvasRef) return;

    const rect = containerRef.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    canvasRef.width = width;
    canvasRef.height = height;
    canvasRef.style.width = `${width}px`;
    canvasRef.style.height = `${height}px`;

    const colorsArray = finalColors.split(',');
    const pxs: Pixel[] = [];

    for (let x = 0; x < width; x += parseInt(finalGap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap.toString(), 10)) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        pxs.push(
          new Pixel(
            canvasRef,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(finalSpeed, reducedMotion),
            delay
          )
        );
      }
    }

    pixels = pxs;
  }

  function doAnimate(fnName: keyof Pixel) {
    animationId = requestAnimationFrame(() => doAnimate(fnName));

    const timeNow = performance.now();
    const timePassed = timeNow - timePrevious;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePrevious = timeNow - (timePassed % timeInterval);

    if (!canvasRef) return;
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);

    let allIdle = true;
    for (const pixel of pixels) {
      // @ts-ignore
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }

    if (allIdle && animationId !== null) {
      cancelAnimationFrame(animationId);
    }
  }

  function handleAnimation(name: keyof Pixel) {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    animationId = requestAnimationFrame(() => doAnimate(name));
  }

  function onMouseEnter() {
    handleAnimation('appear');
  }

  function onMouseLeave() {
    handleAnimation('disappear');
  }

  function onFocus(event: FocusEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.contains(event.relatedTarget as Node)) return;
    handleAnimation('appear');
  }

  function onBlur(event: FocusEvent) {
    const target = event.currentTarget as HTMLElement;
    if (target.contains(event.relatedTarget as Node)) return;
    handleAnimation('disappear');
  }

  let observer: ResizeObserver;

  onMount(() => {
    initPixels();
    observer = new ResizeObserver(initPixels);
    if (containerRef) observer.observe(containerRef);
  });

  onDestroy(() => {
    observer?.disconnect();
    if (animationId !== null) cancelAnimationFrame(animationId);
  });
</script>

<div
  bind:this={containerRef}
  class={`pixel-card ${className}`}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:focus={!finalNoFocus ? onFocus : undefined}
  on:blur={!finalNoFocus ? onBlur : undefined}
  tabindex={finalNoFocus ? -1 : 0}
>
  <canvas class="pixel-canvas" bind:this={canvasRef} />
  <slot />
</div>
