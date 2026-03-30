<?php
/**
 * Qualification Section
 * 
 * @package prime-patient-main
 */
?>

<section class="relative overflow-hidden noise-overlay">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-[-15%] bg-cover bg-center" style="background-image: url('<?php echo esc_url(theme_asset('qualification-parallax.jpg')); ?>');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy/98 via-navy/95 to-navy/92"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[2]">
        <div class="section-container py-16 md:py-20">
            <!-- Header -->
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-12">
                <div style="text-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3);">
                    <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3" style="text-shadow: 0 2px 12px hsl(192 100% 56% / 0.4);">Qualification</p>
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                        Is Turnkey Consult right for your practice?
                    </h2>
                    <p class="text-sm text-white/60">
                        We work exclusively with practices that meet these criteria to ensure mutual success.
                    </p>
                </div>
            </div>

            <!-- Qualification Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
                <?php
                $qualifications = array(
                    array(
                        'icon' => 'phone',
                        'title' => 'Responsive Front Desk',
                        'desc' => 'You can answer calls fast or have dedicated coverage for incoming patient inquiries',
                    ),
                    array(
                        'icon' => 'dollar-sign',
                        'title' => 'Self-Pay Focus',
                        'desc' => 'You want more self-paying consults for core cosmetic and reconstructive procedures',
                    ),
                    array(
                        'icon' => 'trending-up',
                        'title' => 'Growth-Ready Operations',
                        'desc' => 'You can handle 15–25+ additional consults per month without operational strain',
                    ),
                    array(
                        'icon' => 'star',
                        'title' => 'Quality Over Volume',
                        'desc' => 'You value pre-qualified, intent-verified patients over raw lead volume',
                    ),
                );
                
                foreach ($qualifications as $index => $item) : 
                    $delay = $index * 100;
                ?>
                    <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card p-5 flex items-start gap-4 group hover:-translate-y-1" style="transition-delay: <?php echo $delay; ?>ms;">
                        <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <?php echo theme_icon($item['icon'], 'w-5 h-5 text-accent'); ?>
                        </div>
                        <div>
                            <h4 class="font-heading text-sm font-semibold text-white mb-1"><?php echo esc_html($item['title']); ?></h4>
                            <p class="text-xs text-white/60 leading-relaxed"><?php echo esc_html($item['desc']); ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Divider -->
            <div class="gradient-divider max-w-xl mx-auto mb-14"></div>

            <!-- FAQ Section -->
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 max-w-2xl mx-auto">
                <h3 class="font-heading text-lg md:text-xl font-bold text-white text-center mb-8" style="text-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3);">
                    Frequently Asked Questions
                </h3>
                <div class="space-y-3">
                    <?php
                    $faqs = array(
                        array(
                            'q' => 'Do you guarantee 15–25 consults?',
                            'a' => 'We target this range based on market data and campaign optimization. Results depend on your market, procedures, and responsiveness. We provide transparent reporting so you always know exactly where you stand.',
                        ),
                        array(
                            'q' => 'How do you reduce no-shows?',
                            'a' => 'Automated confirmation sequences — SMS and email reminders, pre-qualification steps, and intent filtering ensure patients are serious before reaching your schedule. Most practices see under 15% no-show rates.',
                        ),
                        array(
                            'q' => 'Will this work in my city?',
                            'a' => 'We assess market viability before onboarding. Our system works across most metro and suburban markets. We'll tell you upfront if your area has limitations — no guesswork.',
                        ),
                        array(
                            'q' => 'What does my staff need to do?',
                            'a' => 'Your front desk answers confirmed consultation calls and schedules appointments. We handle lead generation, filtering, follow-up, and reminders. Minimal disruption to your existing workflow.',
                        ),
                        array(
                            'q' => 'How fast can we launch?',
                            'a' => 'Most practices are live within 7–14 business days after onboarding approval, including market mapping, campaign setup, and flow configuration.',
                        ),
                    );
                    
                    foreach ($faqs as $index => $faq) : 
                        $delay = $index * 60;
                    ?>
                        <div class="glass-card overflow-hidden prime-faq-item" data-index="<?php echo $index; ?>">
                            <button class="prime-faq-toggle w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
                                <div class="flex items-center gap-3 pr-3">
                                    <div class="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                                        <span class="text-[10px] font-bold text-accent"><?php echo $index + 1; ?></span>
                                    </div>
                                    <span class="font-medium text-sm text-white/90"><?php echo esc_html($faq['q']); ?></span>
                                </div>
                                <div class="prime-faq-icon transition-transform duration-300">
                                    <?php echo theme_icon('chevron-down', 'w-4 h-4 text-accent/60 flex-shrink-0'); ?>
                                </div>
                            </button>
                            <div class="prime-faq-content hidden">
                                <div class="px-5 pb-5 pl-14">
                                    <p class="text-xs md:text-sm text-white/60 leading-relaxed"><?php echo esc_html($faq['a']); ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

        </div>
    </div>
</section>
