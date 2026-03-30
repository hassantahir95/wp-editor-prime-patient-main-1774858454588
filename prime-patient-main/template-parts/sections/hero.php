<?php
/**
 * Hero Section
 * 
 * @package prime-patient-main
 */
?>

<section class="relative overflow-hidden noise-overlay">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-[-15%] bg-cover bg-center" style="background-image: url('<?php echo esc_url(theme_asset('hero-parallax.jpg')); ?>');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/65"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[2]">
        <div class="section-container py-24 md:py-32 lg:py-40">
            <div class="max-w-3xl mx-auto text-center">
                <!-- Badge -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
                    <div class="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                        <?php echo theme_icon('sparkles', 'w-3.5 h-3.5 text-accent'); ?>
                        <span class="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                            For Plastic Surgeons
                        </span>
                    </div>
                </div>

                <!-- Headline -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700" style="transition-delay: 100ms;">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.15] heading-gradient mb-5">
                        Book 15–25 Premium Patient Consultations Monthly
                    </h1>
                </div>

                <!-- Subtext -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700" style="transition-delay: 200ms;">
                    <p class="text-sm md:text-base lg:text-lg text-white/65 leading-relaxed max-w-xl mx-auto mb-8">
                        High-quality Meta ads, intent filtering, and automated follow-up — so your calendar stays filled without relying on referrals.
                    </p>
                </div>

                <!-- CTA -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700" style="transition-delay: 300ms;">
                    <button class="cta-button group text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 mb-4 hover:scale-105 transition-transform">
                        See How Turnkey Consult Works
                        <?php echo theme_icon('arrow-right', 'inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform'); ?>
                    </button>
                    <div class="flex items-center justify-center gap-2 text-[11px] text-white/35">
                        <?php echo theme_icon('lock', 'w-3 h-3'); ?>
                        <span>1 practice per local area · Limited onboarding this month</span>
                    </div>
                </div>

                <!-- Mini Stats -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700" style="transition-delay: 450ms;">
                    <div class="flex items-center justify-center gap-6 md:gap-10 mt-12 pt-8 border-t border-white/10">
                        <?php
                        $stats = array(
                            array('value' => '15–25', 'label' => 'Monthly Consults'),
                            array('value' => '87%', 'label' => 'Show Rate'),
                            array('value' => '<15%', 'label' => 'No-Shows'),
                        );
                        foreach ($stats as $stat) : ?>
                            <div class="text-center">
                                <p class="text-lg md:text-xl font-heading font-bold text-white"><?php echo esc_html($stat['value']); ?></p>
                                <p class="text-[10px] uppercase tracking-wider text-white/40"><?php echo esc_html($stat['label']); ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
