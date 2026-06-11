/* =========================================================================
   عالم الإبداع المتطورة — صفحة الهبوط
   التفاعلات: الهيدر عند التمرير، قائمة الجوال، التمرير الناعم، تتبّع التحويلات
   ========================================================================= */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  /* ---- 1) حالة الهيدر عند التمرير (خلفية صلبة بعد النزول) ---- */
  const SOLID = ['bg-brand-blue-dark/95', 'backdrop-blur', 'shadow-lg'];
  function onScroll() {
    if (window.scrollY > 40) header.classList.add(...SOLID);
    else header.classList.remove(...SOLID);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- 2) قائمة الجوال ---- */
  function closeMenu() {
    mobileMenu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle.addEventListener('click', function () {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  /* ---- 3) التمرير الناعم مع تعويض ارتفاع الهيدر ---- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- 4) سنة الحقوق ديناميكيًا ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =======================================================================
     5) تتبّع التحويلات (Conversion Tracking)
     -----------------------------------------------------------------------
     يُطلق حدثًا عند كل نقرة على زر اتصال أو واتساب.
     >>> لربط حملة Google Ads: ألصق معرّف التحويل (AW-XXXXXXXXXX/Label)
         داخل دالة gtag أدناه، وأضِف وسم gtag.js العام في <head>.
     ======================================================================= */
  function trackConversion(type, el) {
    const label = type === 'call' ? 'اتصال هاتفي' : 'واتساب';

    // Google Ads (gtag.js) — استبدل القيمة بمعرّف التحويل الخاص بك
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        // send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
        event_category: 'lead',
        event_label: label,
        value: 1,
      });
    }

    // Google Tag Manager (بديل) — يدفع الحدث إلى dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_' + type, lead_type: label });

    // أثناء التطوير: تأكيد في الـ console قبل ربط الحملة الحقيقية
    if (!window.gtag) console.info('[تتبّع التحويل]', type, '→', label);
  }

  document.querySelectorAll('[data-conversion]').forEach((el) => {
    el.addEventListener('click', function () {
      trackConversion(this.getAttribute('data-conversion'), this);
    });
  });
})();
