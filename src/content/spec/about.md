# About
하고싶은건 전부 합니다.

::github{repo="AHRI2nd/AHRI2nd.github.io"}

> ## Contact
> - [Discord](https://discord.com/users/762945704951545867) <span class="copy-text cursor-pointer rounded px-1 transition-colors hover:text-[var(--primary)]" title="Click to copy" data-copy="ahri2nd">@ahri2nd</span>
> - [X](https://x.com/Tsukimori_Ahri) <span class="copy-text cursor-pointer rounded px-1 transition-colors hover:text-[var(--primary)]" title="Click to copy" data-copy="Tsukimori_Ahri">@Tsukimori_Ahri</span>
> - [email](mailto:tsukimori@ahri2nd.xyz) <span class="copy-text cursor-pointer rounded px-1 transition-colors hover:text-[var(--primary)]" title="Click to copy" data-copy="tsukimori@ahri2nd.xyz">tsukimori@ahri2nd.xyz</span>


<script>
(function () {
  function initCopyText() {
    document.querySelectorAll('.copy-text').forEach(function (el) {
      if (el.dataset.copyInit) return;
      el.dataset.copyInit = '1';
      el.addEventListener('click', function () {
        var text = el.dataset.copy;
        navigator.clipboard.writeText(text).then(function () {
          var original = el.textContent;
          el.textContent = '✓ Copied';
          setTimeout(function () { el.textContent = original; }, 1500);
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', initCopyText);
  document.addEventListener('swup:page:view', initCopyText);
})();
</script>
