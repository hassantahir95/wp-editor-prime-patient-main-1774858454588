<?php
/**
 * Why Choose Section
 * 
 * @package prime-patient-main
 */
?>

<section class="relative overflow-hidden noise-overlay">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-[-15%] bg-cover bg-center" style="background-image: url('<?php echo esc_url(theme_asset('why-parallax.jpg')); ?>');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy/97 via-navy/92 to-navy/85"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[2]">
        <div class="section-container py-16 md:py-20">
            <!-- Header -->
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-14">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Why Us</p>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                    Built for surgeons, not generalists
                </h2>
                <p class="text-sm text-white/60">
                    Most agencies deliver leads. We deliver confirmed, pre-qualified consultations that respect your time.
                </p>
            </div>

            <!-- Advantage Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 max-w-5xl mx-auto">
                <?php
                $advantages = array(
                    array(
                        'icon' => 'target',
                        'title' => 'Consult-Volume Architecture',
                        'desc' => 'Every touchpoint engineered around show rates, not vanity metrics',
                    ),
                    array(
                        'icon' => 'shield',
                        'title' => 'Intent-Grade Filtering',
                        'desc' => 'Automated screening eliminates tire-kickers before they reach your desk',
                    ),
                    array(
                        'icon' => 'users',
                        'title' => 'Front-Desk Friendly',
                        'desc' => 'Your staff receives confirmed, scheduled patients — not raw leads to chase',
                    ),
                    array(
                        'icon' => 'map-pin',
                        'title' => 'Market Exclusivity',
                        'desc' => 'One practice per local area — no competing with your neighbor for the same patient',
                    ),
                );
                
                foreach ($advantages as $index => $item) : 
                    $delay = $index * 100;
                ?>
                    <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card p-5 group cursor-default hover:-translate-y-2" style="transition-delay: <?php echo $delay; ?>ms;">
                        <div class="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                            <?php echo theme_icon($item['icon'], 'w-5 h-5 text-accent'); ?>
                        </div>
                        <h4 class="font-heading text-sm font-semibold text-white mb-2"><?php echo esc_html($item['title']); ?></h4>
                        <p class="text-xs text-white/60 leading-relaxed"><?php echo esc_html($item['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Comparison Table -->
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
                <div class="max-w-3xl mx-auto">
                    <div class="glass-card overflow-hidden">
                        <!-- Table Header -->
                        <div class="grid grid-cols-3 gap-0 border-b border-white/10">
                            <div class="p-4 md:p-5">
                                <span class="text-xs font-bold uppercase tracking-wider text-white/40">Feature</span>
                            </div>
                            <div class="p-4 md:p-5 text-center border-l border-white/10">
                                <div class="flex items-center justify-center gap-2">
                                    <?php echo theme_icon('x-circle', 'w-3.5 h-3.5 text-red-400/70'); ?>
                                    <span class="text-xs font-bold uppercase tracking-wider text-white/40">Generic Agency</span>
                                </div>
                            </div>
                            <div class="p-4 md:p-5 text-center border-l border-accent/20 bg-accent/5">
                                <div class="flex items-center justify-center gap-2">
                                    <?php echo theme_icon('check-circle', 'w-3.5 h-3.5 text-accent'); ?>
                                    <span class="text-xs font-bold uppercase tracking-wider text-accent">Turnkey Consult</span>
                                </div>
                            </div>
                        </div>

                        <!-- Table Rows -->
                        <?php
                        $comparison = array(
                            array('feature' => 'Lead Delivery', 'generic' => 'Raw contact list', 'turnkey' => 'Confirmed bookings'),
                            array('feature' => 'Follow-Up', 'generic' => 'Staff responsibility', 'turnkey' => 'Fully automated'),
                            array('feature' => 'No-Show Rate', 'generic' => '30–50%', 'turnkey' => 'Under 15%'),
                            array('feature' => 'Staff Workload', 'generic' => 'Heavy chase required', 'turnkey' => 'Answer confirmed calls'),
                            array('feature' => 'Market Protection', 'generic' => 'None', 'turnkey' => 'Local exclusivity'),
                        );
                        
                        foreach ($comparison as $index => $row) : 
                            $border_class = ($index < count($comparison) - 1) ? 'border-b border-white/5' : '';
                        ?>
                            <div class="grid grid-cols-3 gap-0 <?php echo $border_class; ?>">
                                <div class="p-4 md:p-5">
                                    <span class="text-sm font-medium text-white/80"><?php echo esc_html($row['feature']); ?></span>
                                </div>
                                <div class="p-4 md:p-5 text-center border-l border-white/10">
                                    <span class="text-xs text-white/40"><?php echo esc_html($row['generic']); ?></span>
                                </div>
                                <div class="p-4 md:p-5 text-center border-l border-accent/20 bg-accent/5">
                                    <span class="text-xs text-accent font-medium"><?php echo esc_html($row['turnkey']); ?></span>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>

                    <!-- Bottom CTA -->
                    <div class="text-center mt-8">
                        <button class="cta-button group hover:scale-105 transition-transform">
                            See If You Qualify
                            <?php echo theme_icon('arrow-right', 'inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform'); ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
