<?php
/**
 * Pain Section
 * 
 * @package prime-patient-main
 */
?>

<section class="bg-background noise-overlay relative">
    <div class="section-container relative z-[2]">
        <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-700 text-center max-w-2xl mx-auto mb-14">
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">The Problem</p>
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 text-foreground">
                If next month's consults are a question mark, your entire operation slows down
            </h2>
            <p class="text-muted-foreground text-sm md:text-base">
                Inconsistent consult flow creates revenue gaps, staffing chaos, and OR underutilization.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            <?php
            $pain_cards = array(
                array('icon' => 'calendar-x', 'title' => 'Empty Consult Slots', 'desc' => 'Idle OR time and avoidable revenue gaps that compound monthly.'),
                array('icon' => 'shuffle', 'title' => 'Chaotic Planning Weeks', 'desc' => 'Staffing and surgery planning becomes reactive instead of strategic.'),
                array('icon' => 'users', 'title' => 'Referral Plateau', 'desc' => 'Referrals are valuable, but they're not a scalable growth system.'),
                array('icon' => 'alert-triangle', 'title' => 'No-Show Headaches', 'desc' => 'Lead lists without confirmation waste surgeon time and OR capacity.'),
            );
            
            foreach ($pain_cards as $index => $card) : 
                $delay = $index * 80;
            ?>
                <div class="prime-patient-main-reveal opacity-0 translate-y-8 transition-all duration-600 glass-card-light p-6 md:p-7 group cursor-default relative overflow-hidden hover:-translate-y-2 hover:shadow-xl" style="transition-delay: <?php echo $delay; ?>ms;">
                    <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full"></div>
                    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300">
                        <?php echo theme_icon($card['icon'], 'w-5 h-5 text-accent'); ?>
                    </div>
                    <h3 class="font-heading text-lg font-semibold mb-2 text-foreground"><?php echo esc_html($card['title']); ?></h3>
                    <p class="text-muted-foreground text-sm leading-relaxed"><?php echo esc_html($card['desc']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="gradient-divider mt-16"></div>
    </div>
</section>
