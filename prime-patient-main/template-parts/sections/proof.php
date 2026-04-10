<?php
/**
 * Proof Section
 * 
 * @package prime-patient-main
 */
?>

<section class="relative overflow-hidden noise-overlay">
    <!-- Background image with parallax effect -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-[-15%] bg-cover bg-center" style="background-image: url('<?php echo esc_url(theme_asset('proof-parallax.jpg')); ?>');"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy/75"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-[2]">
        <div class="section-container">
            <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-12">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Results</p>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 text-white">
                    From unpredictable slow weeks to reliable consult bookings
                </h2>
                <p class="text-white/60 text-sm md:text-base">
                    Typical patterns when a practice switches to Turnkey Consult style scheduling.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
                <!-- Before/After table -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700">
                    <div class="glass-card p-6 md:p-7">
                        <h3 class="font-heading text-base font-semibold mb-5 text-white">Illustrative Example</h3>
                        <div class="space-y-4">
                            <?php
                            $comparisons = array(
                                array('before' => '10–15 random consults/month', 'after' => '15–25 pre-qualified consults/month'),
                                array('before' => 'High no-show rates', 'after' => 'Confirmed attendance workflows'),
                                array('before' => 'Staff chasing cold leads', 'after' => 'Filtered, intent-verified inquiries'),
                            );
                            
                            foreach ($comparisons as $index => $row) : 
                                $delay = $index * 100;
                            ?>
                                <div class="grid grid-cols-2 gap-4 text-sm py-3 border-b border-white/10 last:border-0">
                                    <div>
                                        <span class="text-[10px] font-bold text-red-400 uppercase tracking-widest">Before</span>
                                        <p class="mt-1 text-white/60 text-xs md:text-sm"><?php echo esc_html($row['before']); ?></p>
                                    </div>
                                    <div>
                                        <span class="text-[10px] font-bold text-accent uppercase tracking-widest">After</span>
                                        <p class="mt-1 text-white/85 text-xs md:text-sm"><?php echo esc_html($row['after']); ?></p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        <p class="text-[11px] text-white/35 mt-5 italic">
                            Results vary by market, offer, and patient eligibility. Ask for an assessment.
                        </p>
                    </div>
                </div>

                <!-- Calendar mockup -->
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700" style="transition-delay: 150ms;">
                    <div class="glass-card p-5 md:p-6">
                        <h3 class="font-heading text-base font-semibold mb-4 text-white">Monthly View</h3>
                        <div class="grid grid-cols-5 gap-1.5">
                            <?php
                            $days = array('Mon', 'Tue', 'Wed', 'Thu', 'Fri');
                            foreach ($days as $day) : ?>
                                <div class="text-[10px] text-center text-white/45 font-semibold pb-2"><?php echo esc_html($day); ?></div>
                            <?php endforeach; ?>
                            
                            <?php
                            $has_consult_days = array(0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19);
                            for ($i = 0; $i < 20; $i++) :
                                $has_consult = in_array($i, $has_consult_days);
                                $class = $has_consult ? 'bg-accent/20 border border-accent/35' : 'bg-white/5 border border-white/8';
                            ?>
                                <div class="rounded-lg p-1.5 text-center text-xs <?php echo $class; ?>">
                                    <span class="text-white/80 font-medium text-[11px]"><?php echo $i + 1; ?></span>
                                    <?php if ($has_consult) : ?>
                                        <div class="mt-0.5 flex justify-center">
                                            <?php echo theme_icon('check-circle', 'w-2.5 h-2.5 text-accent'); ?>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endfor; ?>
                        </div>
                        <div class="flex items-center gap-2 mt-3">
                            <div class="w-2.5 h-2.5 rounded-sm bg-accent/20 border border-accent/35"></div>
                            <span class="text-[11px] text-white/55">Confirmed Consult</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
