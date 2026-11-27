window.QUIZ_BANK={
 "id": "ah",
 "title": "Advanced Higher Chemistry",
 "subtitle": "Electronic structure, transition metals, shapes and bonding, equilibrium, kinetics, thermodynamics, organic chemistry, instrumental analysis and researching chemistry.",
unitLabel:"Unit", topicLabel:"Topic",
 units:[{"id":"ip","name":"Inorganic and Physical Chemistry"},{"id":"oi","name":"Organic Chemistry and Instrumental Analysis"},{"id":"rc","name":"Researching Chemistry"}],
 topics:[{"id":"spectra","name":"Electromagnetic radiation and atomic spectra","unit":"ip"},{"id":"orbitals","name":"Atomic orbitals and electronic configuration","unit":"ip"},{"id":"shapes","name":"Electron pair theory and molecular shape","unit":"ip"},{"id":"tm","name":"Transition metals","unit":"ip"},{"id":"equil","name":"Chemical equilibrium","unit":"ip"},{"id":"feasible","name":"Reaction feasibility (thermodynamics)","unit":"ip"},{"id":"kinetics","name":"Reaction kinetics","unit":"ip"},{"id":"structure","name":"Structure of organic compounds","unit":"oi"},{"id":"mechanisms","name":"Reaction types and mechanisms","unit":"oi"},{"id":"colour","name":"Origin of colour in organic compounds","unit":"oi"},{"id":"spectro","name":"Elemental analysis and spectroscopic techniques","unit":"oi"},{"id":"medicines","name":"Medicines and drug interactions","unit":"oi"},{"id":"stoich","name":"Stoichiometric calculations","unit":"rc"},{"id":"practical","name":"Practical techniques and calculations","unit":"rc"},{"id":"investigation","name":"Practical investigation","unit":"rc"},{"id":"articles","name":"Scientific articles","unit":"rc"}],
 "questions": [
  {
   "id": "elec-01",
   "topic": "orbitals",
   "q": "Which set of values for the quantum numbers l and mₗ is allowed for an electron in a d orbital?",
   "options": [
    "l = 1, mₗ = −2",
    "l = 2, mₗ = +3",
    "l = 2, mₗ = −2",
    "l = 3, mₗ = 0"
   ],
   "answer": 2,
   "explanation": "A d orbital has l = 2, so mₗ can take integer values from −2 to +2 (five d orbitals). mₗ = −2 with l = 2 is allowed; l = 1 only allows −1, 0, +1, and mₗ = +3 is outside the range."
  },
  {
   "id": "elec-02",
   "topic": "orbitals",
   "q": "Which is the ground state electron configuration of a chromium atom?",
   "options": [
    "[Ar] 3d⁵ 4s¹",
    "[Ar] 3d⁴ 4s²",
    "[Ar] 3d⁶",
    "[Ar] 4s² 4p⁴"
   ],
   "answer": 0,
   "explanation": "A half-filled 3d subshell with a single 4s electron is lower in energy overall than 3d⁴ 4s², because the electrons occupy separate orbitals with parallel spins and repulsion is reduced. The expected 3d⁴ 4s² pattern is therefore not observed."
  },
  {
   "id": "elec-03",
   "topic": "orbitals",
   "q": "What is the electron configuration of the Fe³⁺ ion?",
   "options": [
    "[Ar] 3d³ 4s²",
    "[Ar] 3d⁶",
    "[Ar] 3d⁴ 4s¹",
    "[Ar] 3d⁵"
   ],
   "answer": 3,
   "explanation": "Iron is [Ar] 3d⁶ 4s². In forming transition metal cations the 4s electrons are lost first, then 3d, so Fe³⁺ loses both 4s electrons and one 3d electron, giving [Ar] 3d⁵."
  },
  {
   "id": "elec-04",
   "topic": "spectra",
   "q": "Light of wavelength 500 nm is absorbed by one mole of atoms, each atom absorbing one photon. Using E = Lhc/λ, what energy is absorbed per mole? (L = 6.02 × 10²³ mol⁻¹, h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹)",
   "options": [
    "2.4 kJ mol⁻¹",
    "240 kJ mol⁻¹",
    "120 kJ mol⁻¹",
    "2.4 × 10⁵ kJ mol⁻¹"
   ],
   "answer": 1,
   "explanation": "λ = 5.00 × 10⁻⁷ m. E = (6.02 × 10²³ × 6.63 × 10⁻³⁴ × 3.00 × 10⁸) ÷ 5.00 × 10⁻⁷ ≈ 2.4 × 10⁵ J mol⁻¹ = 240 kJ mol⁻¹. Forgetting to convert nm to m, or J to kJ, gives the other values."
  },
  {
   "id": "elec-05",
   "topic": "spectra",
   "q": "In the atomic emission spectrum of hydrogen, the lines within a series get closer together towards the high energy end. What is the explanation?",
   "options": [
    "The energy levels get closer together as n increases, converging at the ionisation limit",
    "The electron moves to lower n more slowly at higher energies",
    "The nuclear charge increases with each successive transition",
    "Electrons in higher levels have a lower mass"
   ],
   "answer": 0,
   "explanation": "Energy levels become progressively closer as n increases and converge at the ionisation limit. Transitions from adjacent high levels down to the same lower level therefore differ little in energy, so the lines converge."
  },
  {
   "id": "elec-06",
   "topic": "orbitals",
   "q": "The first ionisation energy of aluminium is lower than that of magnesium. What is the best explanation?",
   "options": [
    "Aluminium has a smaller nuclear charge than magnesium",
    "Aluminium atoms are smaller than magnesium atoms",
    "The 3s subshell of aluminium is half-filled and so is unusually stable",
    "The outermost electron in aluminium is in a 3p orbital, which is higher in energy and better shielded than a 3s orbital"
   ],
   "answer": 3,
   "explanation": "The electron removed from aluminium comes from a 3p orbital, which is on average further from the nucleus and shielded by the 3s electrons, so it is easier to remove. Aluminium has a greater nuclear charge, not a smaller one."
  },
  {
   "id": "tm-01",
   "topic": "tm",
   "q": "What are the coordination number of copper and the oxidation state of copper in [Cu(NH₃)₄]²⁺?",
   "options": [
    "Coordination number 4, oxidation state +4",
    "Coordination number 4, oxidation state +2",
    "Coordination number 2, oxidation state +2",
    "Coordination number 6, oxidation state +2"
   ],
   "answer": 1,
   "explanation": "Four ammonia ligands each form one dative bond, so the coordination number is 4. Ammonia is neutral, so the oxidation state equals the overall charge, +2."
  },
  {
   "id": "tm-02",
   "topic": "tm",
   "q": "What is the systematic name of [Co(NH₃)₆]Cl₃?",
   "options": [
    "Hexaamminecobalt(II) chloride",
    "Hexaammoniacobalt(III) chloride",
    "Cobalt(III) hexaammine trichloride",
    "Hexaamminecobalt(III) chloride"
   ],
   "answer": 3,
   "explanation": "The ligand NH₃ is named ammine, with six of them (hexa). Three chloride ions balance the 3+ charge on the complex ion, so cobalt is +3. The name gives ligands first, then the metal with its oxidation state, then the anion."
  },
  {
   "id": "tm-03",
   "topic": "tm",
   "q": "Why does a solution containing [Cu(H₂O)₆]²⁺ appear blue?",
   "options": [
    "It absorbs light in the red/orange region as electrons are promoted between split d orbitals, so the transmitted light is blue",
    "It absorbs blue light, so blue is the colour seen",
    "Electrons are promoted from the 4s to the 4p subshell, emitting blue light",
    "The complex ion reflects blue light from its surface"
   ],
   "answer": 0,
   "explanation": "Ligands split the 3d orbitals into two sets. Light of energy equal to the gap is absorbed (here red/orange), promoting an electron, and the remaining light, which is the complementary colour, is transmitted and seen."
  },
  {
   "id": "tm-04",
   "topic": "tm",
   "q": "Aqueous Zn²⁺ ions are colourless. What is the reason?",
   "options": [
    "Zinc is not a metal",
    "The d orbitals in Zn²⁺ are not split by ligands",
    "The 3d subshell is full, so there are no vacant d orbitals for electron promotion",
    "Zn²⁺ has no 3d electrons"
   ],
   "answer": 2,
   "explanation": "Zn²⁺ is [Ar] 3d¹⁰. With a full d subshell there is no empty d orbital to accept a promoted electron, so there is no d–d transition and no visible light is absorbed. Zn²⁺ does have ten 3d electrons."
  },
  {
   "id": "tm-05",
   "topic": "tm",
   "q": "Complex ion X absorbs light of a shorter wavelength than complex ion Y, with the same metal ion. What can be concluded?",
   "options": [
    "The d orbital splitting is greater in Y",
    "The metal ion in X has more d electrons",
    "X must have a higher coordination number than Y",
    "The d orbital splitting is greater in X, so X has the stronger field ligands"
   ],
   "answer": 3,
   "explanation": "Shorter wavelength means higher energy photons (E = hc/λ). The energy absorbed matches the d orbital energy gap, so a larger gap in X means its ligands cause greater splitting."
  },
  {
   "id": "tm-06",
   "topic": "tm",
   "q": "The complex ion [Fe(C₂O₄)₃]³⁻ contains the bidentate ligand ethanedioate, C₂O₄²⁻. What are the coordination number and oxidation state of iron?",
   "options": [
    "Coordination number 3, oxidation state +3",
    "Coordination number 6, oxidation state +3",
    "Coordination number 6, oxidation state +6",
    "Coordination number 3, oxidation state +6"
   ],
   "answer": 1,
   "explanation": "Each bidentate ligand forms two dative bonds, so three ligands give a coordination number of 6. Total charge: Fe + 3(−2) = −3, so iron is +3. Counting ligands rather than bonds would wrongly give 3."
  },
  {
   "id": "shapes-01",
   "topic": "shapes",
   "q": "What is the shape of an SF₄ molecule?",
   "options": [
    "See-saw",
    "Tetrahedral",
    "Square planar",
    "Trigonal bipyramidal"
   ],
   "answer": 0,
   "explanation": "Sulfur has four bonding pairs and one lone pair, five electron pairs in total, arranged as a trigonal bipyramid. The lone pair occupies an equatorial position, giving a see-saw shape; tetrahedral would need no lone pair."
  },
  {
   "id": "shapes-02",
   "topic": "shapes",
   "q": "What is the shape of the XeF₄ molecule?",
   "options": [
    "Tetrahedral",
    "See-saw",
    "Square planar",
    "Octahedral"
   ],
   "answer": 2,
   "explanation": "Xenon has four bonding pairs and two lone pairs, six pairs in all, arranged octahedrally. The lone pairs sit opposite each other, leaving the four fluorine atoms in a square plane. Octahedral would apply only if all six pairs were bonding."
  },
  {
   "id": "shapes-03",
   "topic": "shapes",
   "q": "Which is the correct order of H–X–H bond angles, from smallest to largest?",
   "options": [
    "CH₄ < NH₃ < H₂O",
    "H₂O < NH₃ < CH₄",
    "NH₃ < H₂O < CH₄",
    "H₂O < CH₄ < NH₃"
   ],
   "answer": 1,
   "explanation": "All have four electron pairs, but lone pairs repel more strongly than bonding pairs. Water has two lone pairs (about 104.5°), ammonia one (about 107°) and methane none (109.5°)."
  },
  {
   "id": "shapes-04",
   "topic": "shapes",
   "q": "In a molecule of PCl₅, what are the Cl–P–Cl bond angles?",
   "options": [
    "109.5° only",
    "90° only",
    "107° and 120°",
    "90° and 120°"
   ],
   "answer": 3,
   "explanation": "PCl₅ has five bonding pairs and is trigonal bipyramidal. The three equatorial chlorines are 120° apart, and axial to equatorial bonds are at 90°. Only a tetrahedron has a single angle of 109.5°."
  },
  {
   "id": "shapes-05",
   "topic": "shapes",
   "q": "Boron trifluoride, BF₃, contains polar bonds but is a non-polar molecule. Why?",
   "options": [
    "The B–F bonds are non-polar covalent",
    "Boron has a lone pair that cancels the dipoles",
    "It is trigonal planar, so the bond dipoles cancel",
    "Fluorine and boron have equal electronegativities"
   ],
   "answer": 2,
   "explanation": "Fluorine is much more electronegative than boron, so each B–F bond is polar. The molecule is symmetrical and trigonal planar, so the three dipoles cancel and there is no net dipole."
  },
  {
   "id": "shapes-06",
   "topic": "shapes",
   "q": "Which species has a trigonal planar shape?",
   "options": [
    "NO₃⁻",
    "SO₃²⁻",
    "ClO₃⁻",
    "NH₃"
   ],
   "answer": 0,
   "explanation": "NO₃⁻ has three bonding regions around nitrogen and no lone pairs, giving a trigonal planar shape. SO₃²⁻, ClO₃⁻ and NH₃ each have a lone pair on the central atom and are trigonal pyramidal."
  },
  {
   "id": "equil-01",
   "topic": "equil",
   "q": "At equilibrium, a mixture contains 0.10 mol L⁻¹ A, 0.20 mol L⁻¹ B and 0.40 mol L⁻¹ C for the reaction A + B ⇌ 2C. What is the value of K?",
   "options": [
    "2.0",
    "0.125",
    "20",
    "8.0"
   ],
   "answer": 3,
   "explanation": "K = [C]² ÷ ([A][B]) = (0.40)² ÷ (0.10 × 0.20) = 0.16 ÷ 0.020 = 8.0. Not squaring [C] gives 20, and inverting the expression gives 0.125."
  },
  {
   "id": "equil-02",
   "topic": "equil",
   "q": "What is the pH of a 0.010 mol L⁻¹ solution of a weak monoprotic acid with Kₐ = 1.0 × 10⁻⁵ mol L⁻¹?",
   "options": [
    "2.0",
    "3.5",
    "5.0",
    "3.0"
   ],
   "answer": 1,
   "explanation": "[H⁺] = √(Kₐ × c) = √(1.0 × 10⁻⁵ × 0.010) = 3.2 × 10⁻⁴ mol L⁻¹, so pH = 3.5. A pH of 2.0 would assume complete dissociation, as for a strong acid."
  },
  {
   "id": "equil-03",
   "topic": "equil",
   "q": "A buffer is made from 0.20 mol L⁻¹ of a weak acid HA (Kₐ = 1.0 × 10⁻⁵ mol L⁻¹) and 0.10 mol L⁻¹ of its sodium salt NaA. What is its pH?",
   "options": [
    "5.3",
    "5.0",
    "4.7",
    "4.0"
   ],
   "answer": 2,
   "explanation": "[H⁺] = Kₐ × [HA] ÷ [A⁻] = 1.0 × 10⁻⁵ × 2 = 2.0 × 10⁻⁵ mol L⁻¹, so pH = 4.7. There is more acid than salt, so the pH is below the pKₐ of 5.0."
  },
  {
   "id": "equil-04",
   "topic": "equil",
   "q": "Which indicator is most suitable for a titration of a weak acid with a strong base?",
   "options": [
    "One whose colour change occurs above pH 7, such as phenolphthalein",
    "One whose colour change occurs below pH 7, such as methyl orange",
    "Any indicator, as the pH change is the same size as for a strong acid",
    "One whose colour change occurs at exactly pH 7"
   ],
   "answer": 0,
   "explanation": "At the equivalence point the solution contains the salt of a weak acid and is alkaline. The steep pH change therefore lies above pH 7, so an indicator changing in that range is needed."
  },
  {
   "id": "equil-05",
   "topic": "equil",
   "q": "The forward reaction in an equilibrium is exothermic. What happens to the value of K and to the equilibrium position when the temperature is raised?",
   "options": [
    "K increases and the position shifts towards the products",
    "K decreases and the position shifts towards the reactants",
    "K is unchanged but the position shifts towards the reactants",
    "K decreases and the position shifts towards the products"
   ],
   "answer": 1,
   "explanation": "Raising the temperature favours the endothermic (reverse) reaction, so the position shifts towards reactants and K decreases. Unlike concentration or pressure changes, a temperature change alters the value of K."
  },
  {
   "id": "equil-06",
   "topic": "equil",
   "q": "Which mixture would act as a buffer solution?",
   "options": [
    "Hydrochloric acid and sodium chloride",
    "Sodium hydroxide and sodium chloride",
    "Ethanoic acid and sodium ethanoate",
    "Ethanoic acid and hydrochloric acid"
   ],
   "answer": 2,
   "explanation": "A buffer needs a weak acid and its conjugate base (or a weak base and its conjugate acid) so that added H⁺ or OH⁻ can be removed. Strong acids and bases dissociate completely and cannot provide this."
  },
  {
   "id": "kin-01",
   "topic": "kinetics",
   "q": "The initial rate of a reaction was measured for different concentrations of A and B at constant temperature.\nExp 1: [A] 0.10, [B] 0.10, rate 2.0 × 10⁻⁴\nExp 2: [A] 0.20, [B] 0.10, rate 4.0 × 10⁻⁴\nExp 3: [A] 0.20, [B] 0.20, rate 1.6 × 10⁻³\n(concentrations in mol L⁻¹, rate in mol L⁻¹ s⁻¹.) What is the rate equation?",
   "options": [
    "rate = k[A]²[B]",
    "rate = k[A][B]",
    "rate = k[A][B]²",
    "rate = k[A]²[B]²"
   ],
   "answer": 2,
   "explanation": "Doubling [A] doubles the rate, so the order in A is 1. Doubling [B] (Exp 2 to 3) increases the rate fourfold, so the order in B is 2. The rate equation is k[A][B]²."
  },
  {
   "id": "kin-02",
   "topic": "kinetics",
   "q": "A reaction has the rate equation rate = k[A][B]². In an experiment, [A] = 0.10 mol L⁻¹, [B] = 0.10 mol L⁻¹ and the initial rate is 2.0 × 10⁻⁴ mol L⁻¹ s⁻¹. What is the value of k, including units?",
   "options": [
    "0.20 mol⁻² L² s⁻¹",
    "2.0 × 10⁻² mol⁻² L² s⁻¹",
    "0.20 s⁻¹",
    "2.0 × 10⁻³ mol⁻¹ L s⁻¹"
   ],
   "answer": 0,
   "explanation": "k = rate ÷ ([A][B]²) = 2.0 × 10⁻⁴ ÷ (0.10 × 0.010) = 0.20. For an overall third-order reaction, units are mol⁻² L² s⁻¹."
  },
  {
   "id": "kin-03",
   "topic": "kinetics",
   "q": "What are the units of the rate constant for a reaction that is second order overall, with rate in mol L⁻¹ s⁻¹?",
   "options": [
    "s⁻¹",
    "mol⁻¹ L s⁻¹",
    "mol L⁻¹ s⁻¹",
    "mol⁻² L² s⁻¹"
   ],
   "answer": 1,
   "explanation": "k = rate ÷ concentration², so units = (mol L⁻¹ s⁻¹) ÷ (mol² L⁻²) = mol⁻¹ L s⁻¹. s⁻¹ would be for first order, and mol⁻² L² s⁻¹ for third order."
  },
  {
   "id": "kin-04",
   "topic": "kinetics",
   "q": "For a reaction with rate = k[A]²[B], the concentration of A is tripled and the concentration of B is divided by three at constant temperature. By what factor does the rate change?",
   "options": [
    "It is unchanged",
    "It increases ninefold",
    "It decreases by a factor of three",
    "It increases threefold"
   ],
   "answer": 3,
   "explanation": "Rate changes by 3² × (1/3) = 3. Tripling A gives a factor of nine because A is second order, and dividing B by three reduces this by a third."
  },
  {
   "id": "kin-05",
   "topic": "kinetics",
   "q": "A two-step mechanism for the reaction 2NO₂ + F₂ → 2NO₂F is proposed.\nStep 1 (slow): NO₂ + F₂ → NO₂F + F\nStep 2 (fast): NO₂ + F → NO₂F\nWhich rate equation is consistent with this mechanism?",
   "options": [
    "rate = k[NO₂][F₂]",
    "rate = k[NO₂]²[F₂]",
    "rate = k[NO₂]²",
    "rate = k[F₂]"
   ],
   "answer": 0,
   "explanation": "The rate equation is determined by the slow, rate-determining step and the species reacting in it. Step 1 involves one NO₂ and one F₂, so the rate is first order in each."
  },
  {
   "id": "kin-06",
   "topic": "kinetics",
   "q": "A graph of ln k against 1/T for a reaction (T in kelvin) is a straight line with a gradient of −6.0 × 10³ K. What is the activation energy? (R = 8.31 J K⁻¹ mol⁻¹)",
   "options": [
    "6.0 kJ mol⁻¹",
    "−50 kJ mol⁻¹",
    "50 kJ mol⁻¹",
    "720 kJ mol⁻¹"
   ],
   "answer": 2,
   "explanation": "From ln k = ln A − Eₐ/RT, gradient = −Eₐ/R, so Eₐ = 6.0 × 10³ × 8.31 ≈ 5.0 × 10⁴ J mol⁻¹ = 50 kJ mol⁻¹. The activation energy is positive; the negative sign belongs to the gradient."
  },
  {
   "id": "thermo-01",
   "topic": "feasible",
   "q": "Which reaction has the largest positive entropy change?",
   "options": [
    "H₂(g) + I₂(g) → 2HI(g)",
    "CaCO₃(s) → CaO(s) + CO₂(g)",
    "2H₂(g) + O₂(g) → 2H₂O(l)",
    "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)"
   ],
   "answer": 1,
   "explanation": "Producing a gas from solids greatly increases the number of ways of arranging the energy, so entropy rises significantly. The others have little change or a decrease, because gases or ions in solution are converted to a liquid or solid."
  },
  {
   "id": "thermo-02",
   "topic": "feasible",
   "q": "For the reaction A(g) + B(g) → C(g), the standard entropies are S°(A) = 200, S°(B) = 150 and S°(C) = 250 J K⁻¹ mol⁻¹. What is ΔS° for the reaction?",
   "options": [
    "+100 J K⁻¹ mol⁻¹",
    "+600 J K⁻¹ mol⁻¹",
    "−0.100 J K⁻¹ mol⁻¹",
    "−100 J K⁻¹ mol⁻¹"
   ],
   "answer": 3,
   "explanation": "ΔS° = ΣS°(products) − ΣS°(reactants) = 250 − (200 + 150) = −100 J K⁻¹ mol⁻¹. Subtracting the other way round gives the wrong sign, which is consistent with two gas molecules becoming one."
  },
  {
   "id": "thermo-03",
   "topic": "feasible",
   "q": "A reaction has ΔH = +30 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. Above what temperature does it become feasible?",
   "options": [
    "300 K",
    "3.0 K",
    "30 K",
    "3000 K"
   ],
   "answer": 0,
   "explanation": "Feasible when ΔG < 0, so T > ΔH ÷ ΔS. Converting ΔH to J: 30 000 ÷ 100 = 300 K. Forgetting to convert kJ to J gives 3.0 K."
  },
  {
   "id": "thermo-04",
   "topic": "feasible",
   "q": "A reaction has ΔH = −100 kJ mol⁻¹ and ΔS = −200 J K⁻¹ mol⁻¹. What is ΔG at 400 K?",
   "options": [
    "−180 kJ mol⁻¹",
    "+20 kJ mol⁻¹",
    "−20 kJ mol⁻¹",
    "−99.8 kJ mol⁻¹"
   ],
   "answer": 2,
   "explanation": "ΔG = ΔH − TΔS = −100 − (400 × −0.200) = −100 + 80 = −20 kJ mol⁻¹. The TΔS term must be in kJ (−0.200 kJ K⁻¹ mol⁻¹), and the negative entropy change makes ΔG less negative."
  },
  {
   "id": "thermo-05",
   "topic": "feasible",
   "q": "A reaction has a standard free energy change ΔG° = −5.7 kJ mol⁻¹ at 298 K. Using ΔG° = −RT ln K, what is the approximate value of K? (R = 8.31 J K⁻¹ mol⁻¹)",
   "options": [
    "2.3",
    "0.10",
    "1.0 × 10³",
    "10"
   ],
   "answer": 3,
   "explanation": "ln K = −ΔG° ÷ RT = 5700 ÷ (8.31 × 298) ≈ 2.3, so K = e²·³ ≈ 10. A negative ΔG° means K > 1, which rules out 0.10."
  },
  {
   "id": "thermo-06",
   "topic": "feasible",
   "q": "A reaction has both a negative ΔH and a negative ΔS. How does feasibility depend on temperature?",
   "options": [
    "It is feasible at all temperatures",
    "It is feasible at low temperatures only",
    "It is feasible at high temperatures only",
    "It is not feasible at any temperature"
   ],
   "answer": 1,
   "explanation": "ΔG = ΔH − TΔS. With ΔS negative, −TΔS is positive and grows with T, so at high temperature it outweighs the negative ΔH and ΔG becomes positive. At low T, ΔH dominates and ΔG is negative."
  },
  {
   "id": "org-01",
   "topic": "structure",
   "q": "Which compound is chiral?",
   "options": [
    "2-bromobutane",
    "2-bromopropane",
    "1-bromobutane",
    "2-bromo-2-methylpropane"
   ],
   "answer": 0,
   "explanation": "2-bromobutane has a carbon bonded to four different groups (H, Br, CH₃ and C₂H₅), so it has non-superimposable mirror images. In the others the carbon bearing Br has two identical groups, or no stereocentre."
  },
  {
   "id": "org-02",
   "topic": "mechanisms",
   "q": "2-bromo-2-methylbutane reacts with aqueous hydroxide mainly by an SN1 mechanism. Why is SN1 favoured for this halogenoalkane?",
   "options": [
    "Hydroxide ions attack the carbon from the side opposite to the bromine in a single step",
    "The carbon–bromine bond is non-polar",
    "A tertiary carbocation intermediate is formed, which is stabilised by the three alkyl groups",
    "It is very hindered, so it reacts in one concerted step"
   ],
   "answer": 2,
   "explanation": "Tertiary halogenoalkanes ionise to give a relatively stable tertiary carbocation, the rate-determining step. The bulky alkyl groups also hinder the single-step backside attack required for SN2."
  },
  {
   "id": "org-03",
   "topic": "mechanisms",
   "q": "Optically pure (R)-2-bromobutane reacts with hydroxide ions by an SN2 mechanism. What is the product?",
   "options": [
    "(R)-butan-2-ol, with retention of configuration",
    "A racemic mixture of butan-2-ol",
    "Butan-1-ol",
    "(S)-butan-2-ol, formed by inversion of configuration"
   ],
   "answer": 3,
   "explanation": "SN2 involves backside attack by the nucleophile in a single step, inverting the configuration at the carbon. A racemic mixture is typical of SN1, where a planar carbocation can be attacked from either side."
  },
  {
   "id": "org-04",
   "topic": "mechanisms",
   "q": "In the nitration of benzene, what is the electrophile and how is it formed?",
   "options": [
    "NO₃⁻, formed from nitric acid dissolving in water",
    "NO₂⁺, formed from concentrated nitric acid and concentrated sulfuric acid",
    "NO₂⁻, formed from sodium nitrite",
    "NO⁺, formed from nitric acid alone"
   ],
   "answer": 1,
   "explanation": "Concentrated sulfuric acid protonates nitric acid, which then loses water to form the nitronium ion NO₂⁺. This strong electrophile attacks the delocalised π system of benzene. Anions cannot act as electrophiles."
  },
  {
   "id": "org-05",
   "topic": "mechanisms",
   "q": "Which reagents convert benzene into methylbenzene in a Friedel–Crafts alkylation?",
   "options": [
    "CH₃OH with dilute sulfuric acid",
    "CH₃Cl with aqueous sodium hydroxide",
    "CH₃Cl with an AlCl₃ catalyst",
    "CH₄ with ultraviolet light"
   ],
   "answer": 2,
   "explanation": "AlCl₃ accepts a lone pair from the halogenoalkane, polarising it and generating a carbocation-like electrophile (CH₃⁺) that substitutes a hydrogen on the ring. Aqueous NaOH would hydrolyse the halogenoalkane rather than alkylate benzene."
  },
  {
   "id": "org-06",
   "topic": "mechanisms",
   "q": "What is a suitable route from benzene to phenylamine?",
   "options": [
    "Nitration, then reduction of the nitro group with tin and concentrated hydrochloric acid",
    "Reaction with ammonia at high temperature and pressure",
    "Chlorination, then reaction with NH₃ at room temperature",
    "Friedel–Crafts alkylation, then oxidation"
   ],
   "answer": 0,
   "explanation": "Benzene is nitrated to nitrobenzene using a nitrating mixture, and the nitro group is reduced to NH₂ with tin and hydrochloric acid. Aryl halides are very resistant to nucleophilic attack, so direct reaction with ammonia fails."
  },
  {
   "id": "inst-01",
   "topic": "spectro",
   "q": "In the mass spectrum of propanone, CH₃COCH₃ (molecular mass 58), there is a strong peak at m/z 43. Which fragment is responsible?",
   "options": [
    "CH₃⁺",
    "C₃H₇⁺",
    "CH₃COCH₃⁺",
    "CH₃CO⁺"
   ],
   "answer": 3,
   "explanation": "The 43 peak comes from losing a CH₃ radical (mass 15) from the molecular ion: 58 − 15 = 43, leaving CH₃CO⁺ (15 + 28). CH₃⁺ would appear at m/z 15, and the molecular ion at 58."
  },
  {
   "id": "inst-02",
   "topic": "spectro",
   "q": "An infrared spectrum has a very broad absorption from 2500 to 3300 cm⁻¹ and a strong sharp absorption near 1710 cm⁻¹. Which functional group(s) are present?",
   "options": [
    "Alcohol only",
    "Carboxylic acid",
    "Ketone only",
    "Ester"
   ],
   "answer": 1,
   "explanation": "The strong band near 1710 cm⁻¹ is C=O. The very broad O–H band from 2500–3300 cm⁻¹ is characteristic of a hydrogen-bonded carboxylic acid; a ketone would lack the O–H band, and an alcohol would lack the C=O band."
  },
  {
   "id": "inst-03",
   "topic": "spectro",
   "q": "How many peaks, and in what intensity ratio, would be seen in the low-resolution ¹H NMR spectrum of ethyl ethanoate, CH₃COOCH₂CH₃?",
   "options": [
    "Two peaks in the ratio 3 : 5",
    "Five peaks in the ratio 3 : 2 : 3 : 1 : 1",
    "Three peaks in the ratio 3 : 2 : 3",
    "Three peaks in the ratio 3 : 3 : 2"
   ],
   "answer": 2,
   "explanation": "There are three hydrogen environments: CH₃ attached to C=O (3H), OCH₂ (2H) and CH₃ of the ethyl group (3H). The ratio of peak areas is the ratio of hydrogens in each environment; the total of 8 matches the eight hydrogens in the molecule."
  },
  {
   "id": "inst-04",
   "topic": "spectro",
   "q": "In the high-resolution ¹H NMR spectrum of propan-2-ol, (CH₃)₂CHOH, the signal for the six equivalent CH₃ hydrogens is a doublet. Why?",
   "options": [
    "The adjacent CH has one hydrogen on its carbon, so n + 1 = 2",
    "The hydrogens are next to two CH₃ groups",
    "The hydrogens next to oxygen cause splitting into two",
    "There are two methyl groups, so the signal splits into two"
   ],
   "answer": 0,
   "explanation": "Splitting follows the n + 1 rule, where n is the number of hydrogens on neighbouring carbons. The CH₃ groups are next to a carbon bearing one hydrogen, giving a doublet. The number of equivalent hydrogens in the signal itself does not cause the splitting."
  },
  {
   "id": "inst-05",
   "topic": "spectro",
   "q": "A solution of a coloured complex of concentration 2.0 × 10⁻⁴ mol L⁻¹ has an absorbance of 0.30 in a 1.0 cm cell. A solution of the same complex in the same cell has an absorbance of 0.45. Assuming Beer–Lambert behaviour, what is its concentration?",
   "options": [
    "1.3 × 10⁻⁴ mol L⁻¹",
    "3.0 × 10⁻⁴ mol L⁻¹",
    "4.5 × 10⁻⁴ mol L⁻¹",
    "9.0 × 10⁻⁵ mol L⁻¹"
   ],
   "answer": 1,
   "explanation": "Absorbance is proportional to concentration (A = εcl, with l and ε fixed). Concentration = 2.0 × 10⁻⁴ × (0.45 ÷ 0.30) = 3.0 × 10⁻⁴ mol L⁻¹."
  },
  {
   "id": "inst-06",
   "topic": "spectro",
   "q": "A colorimeter is to be used to measure the concentration of a blue solution. Which colour of filter should be selected?",
   "options": [
    "Blue, the colour of the solution",
    "Green, because it is in the middle of the spectrum",
    "White, to allow all wavelengths through",
    "Red or orange, the colour that is most strongly absorbed by the solution"
   ],
   "answer": 3,
   "explanation": "The filter should transmit the colour most strongly absorbed by the sample, which is the complementary colour of what is seen. A blue solution absorbs red/orange light, giving maximum sensitivity to changes in concentration."
  },
  {
   "id": "res-01",
   "topic": "stoich",
   "q": "25.0 cm³ of an acidified solution of Fe²⁺ ions required 20.0 cm³ of 0.0200 mol L⁻¹ potassium manganate(VII) for complete reaction. (MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.) What is the concentration of Fe²⁺?",
   "options": [
    "0.0800 mol L⁻¹",
    "0.0160 mol L⁻¹",
    "0.0200 mol L⁻¹",
    "0.400 mol L⁻¹"
   ],
   "answer": 0,
   "explanation": "Moles MnO₄⁻ = 0.0200 × 0.0200 = 4.00 × 10⁻⁴ mol. Fe²⁺ = 5 × this = 2.00 × 10⁻³ mol in 0.0250 L, so concentration = 0.0800 mol L⁻¹. Omitting the 1 : 5 ratio gives 0.0160."
  },
  {
   "id": "res-02",
   "topic": "practical",
   "q": "A burette reading has an uncertainty of ±0.05 cm³. A titre of 20.00 cm³ is obtained from an initial and a final reading. What is the percentage uncertainty in the titre?",
   "options": [
    "0.25 %",
    "0.05 %",
    "0.5 %",
    "2.5 %"
   ],
   "answer": 2,
   "explanation": "The titre is a difference of two readings, so the absolute uncertainties add: ±0.10 cm³. Percentage = 0.10 ÷ 20.00 × 100 = 0.5 %. Using one reading only gives 0.25 %."
  },
  {
   "id": "res-03",
   "topic": "practical",
   "q": "The partition coefficient of a solute between ether and water is 4.0 (concentration in ether ÷ concentration in water). A 100 cm³ aqueous solution contains 1.0 g of the solute and is shaken once with 100 cm³ of ether. What mass of solute is extracted into the ether?",
   "options": [
    "0.25 g",
    "0.80 g",
    "0.50 g",
    "4.0 g"
   ],
   "answer": 1,
   "explanation": "At equilibrium, mass in ether ÷ mass in water = 4.0 for equal volumes, so the fraction in ether is 4 ÷ 5 = 0.80, giving 0.80 g. 4.0 g is impossible as only 1.0 g is present."
  },
  {
   "id": "res-04",
   "topic": "practical",
   "q": "The partition coefficient of a solute between ether and water is 4.0 (concentration in ether ÷ concentration in water). 1.0 g of the solute in 100 cm³ of water is extracted with two successive 50 cm³ portions of ether instead of one 100 cm³ portion. What mass is extracted in total?",
   "options": [
    "0.80 g",
    "0.67 g",
    "0.50 g",
    "0.89 g"
   ],
   "answer": 3,
   "explanation": "For each 50 cm³ extraction, mass in water falls by a factor of 100 ÷ (100 + 4.0 × 50) = ⅓. After two portions 1/9 remains (0.11 g), so 0.89 g is extracted. This is more than the 0.80 g from a single 100 cm³ extraction."
  },
  {
   "id": "res-05",
   "topic": "practical",
   "q": "In paper chromatography a spot has moved 3.0 cm while the solvent front has moved 7.5 cm. What is the Rf value?",
   "options": [
    "2.5",
    "0.25",
    "0.40",
    "4.5"
   ],
   "answer": 2,
   "explanation": "Rf = distance moved by spot ÷ distance moved by solvent front = 3.0 ÷ 7.5 = 0.40. Rf has no units and cannot exceed 1, so 2.5 is the inverted ratio."
  },
  {
   "id": "res-06",
   "topic": "practical",
   "q": "An excess of barium chloride was added to a sample containing sulfate ions, and 0.466 g of barium sulfate (gram formula mass 233 g) was obtained after washing and drying to constant mass. What mass of sulfate ions (gram formula mass 96 g) was in the sample?",
   "options": [
    "0.192 g",
    "0.466 g",
    "0.096 g",
    "0.384 g"
   ],
   "answer": 0,
   "explanation": "Moles BaSO₄ = 0.466 ÷ 233 = 2.00 × 10⁻³ mol, and each mole contains one mole of SO₄²⁻. Mass = 2.00 × 10⁻³ × 96 = 0.192 g. Heating to constant mass ensures that the precipitate is dry."
  },
 // batch Gemini 2026-11-27 (9 questions)
  {
   "id": "colour-01",
   "topic": "colour",
   "q": "Which structural feature is most characteristic of organic compounds that absorb visible light and appear coloured, such as β-carotene?",
   "options": [
    "An extended system of alternating single and double carbon–carbon bonds (conjugation)",
    "A single isolated carbon–chlorine bond",
    "A saturated alkane chain with no pi bonds",
    "An ionic lattice of carboxylate anions"
   ],
   "answer": 0,
   "explanation": "Extended conjugated systems create delocalised pi molecular orbitals with a smaller energy gap (ΔE) between the HOMO and LUMO, allowing absorption in the visible region."
  },
  {
   "id": "colour-02",
   "topic": "colour",
   "q": "Extending the conjugated π-system in a polyene chain generally affects the energy gap (ΔE) between the HOMO and LUMO by:",
   "options": [
    "Increasing ΔE so shorter wavelengths are absorbed",
    "Eliminating all electron transitions",
    "Decreasing ΔE so longer wavelengths (lower energy) can be absorbed",
    "Making the molecule ionic"
   ],
   "answer": 2,
   "explanation": "Greater delocalisation across a longer conjugated system reduces the HOMO–LUMO energy gap ΔE, shifting absorption toward longer wavelengths."
  },
  {
   "id": "colour-03",
   "topic": "colour",
   "q": "If an organic dye absorbs light predominantly in the blue region of the visible spectrum, what colour does it typically appear to an observer?",
   "options": [
    "Orange",
    "Blue",
    "Ultraviolet",
    "Colourless"
   ],
   "answer": 0,
   "explanation": "A substance that absorbs visible light of one colour transmits or reflects the complementary colour; absorption in the blue region corresponds roughly to an orange appearance."
  },
  {
   "id": "medicines-01",
   "topic": "medicines",
   "q": "What is the role of an antagonist drug when it interacts with a cellular receptor?",
   "options": [
    "It binds to the receptor and triggers the same maximum biological response as the natural ligand",
    "It permanently destroys the covalent peptide bonds of all enzymes in the cell",
    "It binds to the receptor without activating it, blocking the natural ligand from binding",
    "It converts the receptor into a carbohydrate"
   ],
   "answer": 2,
   "explanation": "An antagonist binds to a receptor site without eliciting a biological response, thereby inhibiting the action of an agonist or natural chemical messenger."
  },
  {
   "id": "medicines-02",
   "topic": "medicines",
   "q": "Why are functional groups such as –OH, –NH₂ or –COOH often important in the pharmacophore of a medicine?",
   "options": [
    "They allow the drug to form hydrogen bonds or ionic interactions with complementary groups on the target receptor or enzyme",
    "They make the drug completely insoluble in aqueous body fluids",
    "They increase the atomic mass of carbon atoms in the ring",
    "They prevent the drug from ever reaching a binding site"
   ],
   "answer": 0,
   "explanation": "Specific functional groups enable directional intermolecular attractions (such as hydrogen bonding and dipole/ionic interactions) that hold the drug in the active or receptor site."
  },
  {
   "id": "structure-01",
   "topic": "structure",
   "q": "How many sigma (σ) and pi (π) bonds are present in a molecule of ethyne (H–C≡C–H)?",
   "options": [
    "5 sigma bonds and 0 pi bonds",
    "2 sigma bonds and 3 pi bonds",
    "3 sigma bonds and 2 pi bonds",
    "4 sigma bonds and 1 pi bond"
   ],
   "answer": 2,
   "explanation": "Each C–H single bond is 1 σ bond (2 in total), and the C≡C triple bond consists of 1 σ bond and 2 π bonds, giving 3 σ and 2 π bonds altogether."
  },
  {
   "id": "stoich-01",
   "topic": "stoich",
   "q": "In a gravimetric analysis, 1.435 g of dry silver chloride precipitate (GFM = 143.5 g) was obtained from a sample containing chloride ions. How many moles of chloride ions were present in the sample?",
   "options": [
    "0.0100 mol",
    "0.100 mol",
    "0.0200 mol",
    "1.00 mol"
   ],
   "answer": 0,
   "explanation": "Moles of AgCl = 1.435 ÷ 143.5 = 0.0100 mol. Since each formula unit of AgCl contains one Cl⁻ ion, 0.0100 mol of Cl⁻ was present."
  },
  {
   "id": "investigation-01",
   "topic": "investigation",
   "q": "When planning an Advanced Higher chemistry investigation, why is it good practice to carry out a preliminary trial before collecting final results?",
   "options": [
    "To avoid having to write an aim or hypothesis",
    "To ensure no hazardous chemicals are ever used in chemistry",
    "To check that chosen concentrations, volumes and reaction times give measurable, reliable readings",
    "To replace the need for repeating measurements"
   ],
   "answer": 2,
   "explanation": "Preliminary experiments test whether the method works under the chosen conditions and help refine concentrations, temperatures or timescales before full data collection."
  },
  {
   "id": "articles-01",
   "topic": "articles",
   "q": "When evaluating a scientific article for Advanced Higher Chemistry, which feature most strengthens the credibility of its experimental claims?",
   "options": [
    "Clear description of methodology, error/uncertainty analysis and peer-reviewed supporting data",
    "Use of emotive headlines without numerical data",
    "Omission of control experiments so results look cleaner",
    "Reliance on a single unrepeated observation"
   ],
   "answer": 0,
   "explanation": "Scientific validity relies on reproducible methods, appropriate controls, transparent data and proper consideration of experimental uncertainty."
  },
 // batch SQA additions b01 (90 questions)
  {
   "id": "ah-expand-b01-001",
   "topic": "spectra",
   "q": "A photon has frequency 7.50 × 10¹⁴ Hz. What is its energy? Use h = 6.63 × 10⁻³⁴ J s.",
   "options": [
    "4.97 × 10⁻¹⁹ J",
    "8.84 × 10⁻⁴⁹ J",
    "1.13 × 10⁴⁸ J",
    "4.97 × 10⁻²⁰ J"
   ],
   "answer": 0,
   "explanation": "E = hf = 6.63 × 10⁻³⁴ × 7.50 × 10¹⁴ = 4.9725 × 10⁻¹⁹ J. The frequency is multiplied by Planck’s constant, not divided by it."
  },
  {
   "id": "ah-expand-b01-002",
   "topic": "spectra",
   "q": "What wavelength corresponds to frequency 6.00 × 10¹⁴ Hz? Use c = 3.00 × 10⁸ m s⁻¹.",
   "options": [
    "200 nm",
    "500 nm",
    "5.00 nm",
    "2.00 × 10³ nm"
   ],
   "answer": 1,
   "explanation": "λ = c/f = 3.00 × 10⁸/(6.00 × 10¹⁴) = 5.00 × 10⁻⁷ m = 500 nm. Converting metres to nanometres requires multiplying by 10⁹."
  },
  {
   "id": "ah-expand-b01-003",
   "topic": "spectra",
   "q": "An electron falls from energy −2.0 × 10⁻¹⁹ J to −5.0 × 10⁻¹⁹ J. What photon energy is emitted?",
   "options": [
    "−3.0 × 10⁻¹⁹ J",
    "7.0 × 10⁻¹⁹ J",
    "3.0 × 10⁻¹⁹ J",
    "−7.0 × 10⁻¹⁹ J"
   ],
   "answer": 2,
   "explanation": "The atom loses 3.0 × 10⁻¹⁹ J, so the emitted photon carries positive energy of that magnitude. Photon energy is the gap, not the sum of the levels."
  },
  {
   "id": "ah-expand-b01-004",
   "topic": "orbitals",
   "q": "How many orbitals are present in a complete p subshell?",
   "options": [
    "2",
    "6",
    "9",
    "3"
   ],
   "answer": 3,
   "explanation": "A p subshell contains three orbitals with different spatial orientations. Each can hold two electrons, so six is its electron capacity rather than its orbital count."
  },
  {
   "id": "ah-expand-b01-005",
   "topic": "orbitals",
   "q": "Which occupation follows Hund’s rule for three electrons in three degenerate p orbitals?",
   "options": [
    "One electron in each orbital with parallel spins",
    "A pair in one orbital and one electron in a second",
    "Three electrons in the same orbital",
    "One electron in each orbital with all possible spins forced to alternate"
   ],
   "answer": 0,
   "explanation": "Electrons singly occupy degenerate orbitals with parallel spins before pairing. Three electrons therefore occupy all three p orbitals individually."
  },
  {
   "id": "ah-expand-b01-006",
   "topic": "orbitals",
   "q": "What is the maximum number of electrons in a single atomic orbital?",
   "options": [
    "2, with identical spins",
    "2, with opposite spins",
    "3, with any spins",
    "6, with identical spins"
   ],
   "answer": 1,
   "explanation": "The Pauli exclusion principle allows two electrons in an orbital only when their spins are opposite. Subshell capacities should not be confused with orbital capacity."
  },
  {
   "id": "ah-expand-b01-007",
   "topic": "orbitals",
   "q": "What is the ground-state electron configuration of Cu⁺? Use Cu = [Ar]3d¹⁰4s¹.",
   "options": [
    "[Ar]3d⁹4s¹",
    "[Ar]3d⁸4s²",
    "[Ar]3d¹⁰",
    "[Ar]3d¹⁰4s²"
   ],
   "answer": 2,
   "explanation": "The 4s electron is removed when Cu forms Cu⁺, leaving a filled 3d subshell. Do not remove a 3d electron first from the neutral copper configuration given."
  },
  {
   "id": "ah-expand-b01-008",
   "topic": "orbitals",
   "q": "Why is the first ionisation energy of sulfur slightly lower than that of phosphorus?",
   "options": [
    "Sulfur has fewer protons than phosphorus",
    "Sulfur’s outer electron occupies a new principal shell",
    "Phosphorus has a completely filled 3p subshell",
    "Pairing in a sulfur 3p orbital adds electron–electron repulsion"
   ],
   "answer": 3,
   "explanation": "Phosphorus has 3p³ with singly occupied orbitals; sulfur has 3p⁴ with one paired orbital. Repulsion within that pair makes one electron slightly easier to remove."
  },
  {
   "id": "ah-expand-b01-009",
   "topic": "orbitals",
   "q": "Which species has ground-state configuration [Ar]3d⁵ with no 4s electrons? Use Mn = [Ar]3d⁵4s².",
   "options": [
    "Mn²⁺",
    "Mn⁺",
    "Mn³⁺",
    "Mn⁴⁺"
   ],
   "answer": 0,
   "explanation": "Mn²⁺ forms by removal of both 4s electrons, leaving 3d⁵. Hund’s rule gives one electron in each of the five d orbitals, all unpaired."
  },
  {
   "id": "ah-expand-b01-010",
   "topic": "spectra",
   "q": "Two emissions have wavelengths 420 nm and 630 nm. What is the ratio E₄₂₀:E₆₃₀?",
   "options": [
    "0.667:1",
    "1.50:1",
    "1:1",
    "2.25:1"
   ],
   "answer": 1,
   "explanation": "Photon energy is inversely proportional to wavelength. E₄₂₀/E₆₃₀ = 630/420 = 1.50; a shorter wavelength carries greater energy."
  },
  {
   "id": "ah-expand-b01-011",
   "topic": "tm",
   "q": "What is the oxidation state of cobalt in [CoCl₄]²⁻?",
   "options": [
    "−2",
    "+4",
    "+2",
    "−4"
   ],
   "answer": 2,
   "explanation": "Let cobalt’s oxidation state be x. Four chlorido ligands contribute −4, so x − 4 = −2 and x = +2."
  },
  {
   "id": "ah-expand-b01-012",
   "topic": "tm",
   "q": "A complex contains Pt⁴⁺, two neutral NH₃ ligands and four Cl⁻ ligands. What is its overall charge?",
   "options": [
    "4+",
    "2+",
    "2−",
    "0"
   ],
   "answer": 3,
   "explanation": "Ligand charges sum to −4 and the metal contributes +4. The complex [Pt(NH₃)₂Cl₄] is neutral; neutral ammine ligands do not change its charge."
  },
  {
   "id": "ah-expand-b01-013",
   "topic": "tm",
   "q": "Three ethanedioate ligands bind bidentately to a metal ion. How many coordinate bonds connect ligands to the metal?",
   "options": [
    "6",
    "3",
    "9",
    "12"
   ],
   "answer": 0,
   "explanation": "A bidentate ligand donates two lone pairs from two donor atoms. Three such ligands make six metal–ligand coordinate bonds, giving coordination number six."
  },
  {
   "id": "ah-expand-b01-014",
   "topic": "tm",
   "q": "Which ligand can bind through two nitrogen donor atoms to form a chelate ring?",
   "options": [
    "NH₃",
    "H₂NCH₂CH₂NH₂",
    "Cl⁻",
    "H₂O"
   ],
   "answer": 1,
   "explanation": "Ethane-1,2-diamine has two nitrogen atoms, each with a donor lone pair. Both can coordinate to the same metal, forming a chelate ring."
  },
  {
   "id": "ah-expand-b01-015",
   "topic": "tm",
   "q": "In an octahedral ligand field, which orbitals form the higher-energy pair?",
   "options": [
    "dxy and dxz",
    "dxy and dyz",
    "dx²−y² and dz²",
    "All five remain degenerate"
   ],
   "answer": 2,
   "explanation": "The dx²−y² and dz² orbitals point towards ligands along the axes and experience greater repulsion. The other three orbitals lie between those directions and are lower in energy."
  },
  {
   "id": "ah-expand-b01-016",
   "topic": "tm",
   "q": "A ligand substitution changes a complex’s absorption maximum from 650 nm to 520 nm. What happens to the corresponding d-orbital energy gap?",
   "options": [
    "It decreases by a factor of 1.25",
    "It stays constant",
    "It increases by a factor of 2.50",
    "It increases by a factor of 1.25"
   ],
   "answer": 3,
   "explanation": "ΔE = hc/λ, so the new-to-old gap ratio is 650/520 = 1.25. Shorter absorbed wavelength corresponds to a larger splitting energy."
  },
  {
   "id": "ah-expand-b01-017",
   "topic": "tm",
   "q": "What is the systematic ligand name used for coordinated NH₃?",
   "options": [
    "Ammine",
    "Amine",
    "Ammonium",
    "Nitrido"
   ],
   "answer": 0,
   "explanation": "Coordinated NH₃ is named ammine, with a double m. Amine describes a class of organic compounds and ammonium is NH₄⁺, not the neutral ligand."
  },
  {
   "id": "ah-expand-b01-018",
   "topic": "tm",
   "q": "What makes the metal–ligand bond a coordinate covalent bond?",
   "options": [
    "The metal must supply both bonding electrons",
    "Both bonding electrons originate from a ligand lone pair",
    "The ligand always transfers a proton",
    "No electrons are shared"
   ],
   "answer": 1,
   "explanation": "The ligand donates a lone pair into an available metal orbital. Once formed, the bond is covalent; “coordinate” identifies the origin of its electron pair."
  },
  {
   "id": "ah-expand-b01-019",
   "topic": "tm",
   "q": "Why can a transition metal participate in a redox catalytic cycle?",
   "options": [
    "It cannot form any ions",
    "It must be permanently consumed in the slow step",
    "It can access different oxidation states and be regenerated through successive steps",
    "Its nucleus changes into a different element at each step"
   ],
   "answer": 2,
   "explanation": "Variable oxidation states let a metal accept and donate electrons in different stages. Regeneration of the original metal species allows catalytic turnover."
  },
  {
   "id": "ah-expand-b01-020",
   "topic": "tm",
   "q": "What is the oxidation state and coordination number of chromium in [Cr(H₂O)₄Cl₂]⁺?",
   "options": [
    "+1 and 4",
    "+2 and 6",
    "+3 and 2",
    "+3 and 6"
   ],
   "answer": 3,
   "explanation": "The two Cl⁻ contribute −2 and water is neutral, so x − 2 = +1 gives Cr(III). Four water and two chlorido donor atoms give coordination number six."
  },
  {
   "id": "ah-expand-b01-021",
   "topic": "shapes",
   "q": "What is the molecular shape of I₃⁻ around its central iodine?",
   "options": [
    "Linear",
    "Bent",
    "Trigonal planar",
    "Tetrahedral"
   ],
   "answer": 0,
   "explanation": "The central iodine has five electron regions: two bonding pairs and three lone pairs. The lone pairs occupy equatorial sites in a trigonal bipyramidal arrangement, leaving the two I–I bonds opposite each other."
  },
  {
   "id": "ah-expand-b01-022",
   "topic": "shapes",
   "q": "How many electron regions surround the central atom in CO₂?",
   "options": [
    "3",
    "2",
    "4",
    "6"
   ],
   "answer": 1,
   "explanation": "Each C=O double bond counts as one electron region in VSEPR. Two such regions and no central lone pairs give a linear arrangement."
  },
  {
   "id": "ah-expand-b01-023",
   "topic": "shapes",
   "q": "What are the electron-region geometry and molecular shape of ClF₃?",
   "options": [
    "Tetrahedral and trigonal pyramidal",
    "Octahedral and square planar",
    "Trigonal bipyramidal and T-shaped",
    "Trigonal planar and bent"
   ],
   "answer": 2,
   "explanation": "Chlorine has three bonding regions and two lone pairs, five regions total. Equatorial lone pairs leave a T-shaped arrangement of the three fluorine atoms."
  },
  {
   "id": "ah-expand-b01-024",
   "topic": "shapes",
   "q": "A species has six electron regions, including one lone pair. What molecular shape is predicted?",
   "options": [
    "Trigonal bipyramidal",
    "Seesaw",
    "Trigonal pyramidal",
    "Square pyramidal"
   ],
   "answer": 3,
   "explanation": "Six regions adopt an octahedral arrangement. Replacing one bonded atom with a lone pair leaves five bonded atoms in a square pyramidal molecular shape."
  },
  {
   "id": "ah-expand-b01-025",
   "topic": "shapes",
   "q": "Why do the three lone pairs in I₃⁻ prefer equatorial positions?",
   "options": [
    "These positions minimise the number of 90° lone-pair interactions",
    "Equatorial positions remove the lone pairs from the molecule",
    "Axial positions have no 90° interactions",
    "Lone pairs attract each other most strongly at 90°"
   ],
   "answer": 0,
   "explanation": "In a trigonal bipyramidal arrangement an equatorial site has fewer 90° neighbours than an axial site. Keeping lone pairs equatorial reduces strong repulsions."
  },
  {
   "id": "ah-expand-b01-026",
   "topic": "shapes",
   "q": "Which molecule has a tetrahedral molecular shape and no lone pairs on its central atom?",
   "options": [
    "NH₃",
    "SiCl₄",
    "H₂O",
    "SF₄"
   ],
   "answer": 1,
   "explanation": "SiCl₄ has four bonding regions and no central lone pairs. NH₃ and H₂O have lone pairs; SF₄ has five electron regions and a seesaw molecular shape."
  },
  {
   "id": "ah-expand-b01-027",
   "topic": "shapes",
   "q": "What changes when NH₃ donates its nitrogen lone pair to H⁺ to form NH₄⁺?",
   "options": [
    "Nitrogen gains an extra occupied electron shell",
    "All N–H bonds become ionic",
    "The nitrogen changes from three bonds and one lone pair to four bonds and no lone pair",
    "The ion becomes trigonal planar"
   ],
   "answer": 2,
   "explanation": "The lone pair becomes the electron pair in the new N–H bond. Four bonding regions then adopt a tetrahedral arrangement around nitrogen."
  },
  {
   "id": "ah-expand-b01-028",
   "topic": "shapes",
   "q": "What is the approximate F–S–F angle between adjacent bonds in octahedral SF₆?",
   "options": [
    "60°",
    "109.5°",
    "120°",
    "90°"
   ],
   "answer": 3,
   "explanation": "An octahedral arrangement has adjacent bonds at 90° and opposite bonds at 180°. The question asks about adjacent, not opposite, bonds."
  },
  {
   "id": "ah-expand-b01-029",
   "topic": "shapes",
   "q": "Which combination gives a non-polar molecule despite polar bonds?",
   "options": [
    "Six identical bonds arranged symmetrically in an octahedron",
    "Three identical bonds and a lone pair in a trigonal pyramid",
    "Two different bonds in a bent molecule",
    "A strongly asymmetric molecule with one polar bond"
   ],
   "answer": 0,
   "explanation": "For an octahedral molecule such as SF₆, the six bond dipoles cancel in opposite pairs. Polarity depends on both bond polarity and the symmetry of their arrangement."
  },
  {
   "id": "ah-expand-b01-030",
   "topic": "shapes",
   "q": "What distinguishes molecular shape from electron-region geometry?",
   "options": [
    "They always have different names",
    "Molecular shape describes atom positions; electron-region geometry also includes lone pairs",
    "Molecular shape includes neutrons but electron geometry does not",
    "Electron-region geometry counts a double bond as two separate regions"
   ],
   "answer": 1,
   "explanation": "Lone pairs affect repulsions and the arrangement of all regions, but they are not atoms. This is why NH₃ has tetrahedral electron-region geometry and trigonal pyramidal molecular shape."
  },
  {
   "id": "ah-expand-b01-031",
   "topic": "equil",
   "q": "For 2A(g) ⇌ B(g), equilibrium concentrations are [A] = 0.30 and [B] = 0.18 mol l⁻¹. What is Kc, including units?",
   "options": [
    "0.60 with no units",
    "0.50 mol l⁻¹",
    "2.0 l mol⁻¹",
    "0.054 mol² l⁻²"
   ],
   "answer": 2,
   "explanation": "Kc = [B]/[A]² = 0.18/(0.30)² = 2.0. Units are concentration divided by concentration squared, giving l mol⁻¹."
  },
  {
   "id": "ah-expand-b01-032",
   "topic": "equil",
   "q": "For CaCO₃(s) ⇌ CaO(s) + CO₂(g), which expression is appropriate using concentration terms?",
   "options": [
    "Kc = [CaO][CO₂]/[CaCO₃]",
    "Kc = 1/[CO₂]",
    "Kc = [CaCO₃]/[CaO]",
    "Kc = [CO₂]"
   ],
   "answer": 3,
   "explanation": "Pure solids have constant activity and are omitted from the equilibrium expression. Only the variable gas concentration appears here."
  },
  {
   "id": "ah-expand-b01-033",
   "topic": "equil",
   "q": "An equilibrium mixture for A ⇌ B contains 0.40 mol A and 0.20 mol B in the same vessel. What is the equilibrium constant Kc?",
   "options": [
    "0.50",
    "2.0",
    "0.080",
    "0.60"
   ],
   "answer": 0,
   "explanation": "Kc = [B]/[A]. Both concentrations have the same volume denominator, which cancels: Kc = 0.20/0.40 = 0.50."
  },
  {
   "id": "ah-expand-b01-034",
   "topic": "equil",
   "q": "A weak monoprotic acid of concentration 0.050 mol l⁻¹ has pH 3.00. Assuming small dissociation, what is Ka?",
   "options": [
    "2.0 × 10⁻² mol l⁻¹",
    "2.0 × 10⁻⁵ mol l⁻¹",
    "5.0 × 10⁻⁵ mol l⁻¹",
    "1.0 × 10⁻³ mol l⁻¹"
   ],
   "answer": 1,
   "explanation": "[H⁺] = 10⁻³ mol l⁻¹. With [A⁻] ≈ [H⁺] and [HA] ≈ 0.050, Ka ≈ (10⁻³)²/0.050 = 2.0 × 10⁻⁵ mol l⁻¹. About 2% dissociation supports the approximation."
  },
  {
   "id": "ah-expand-b01-035",
   "topic": "equil",
   "q": "A buffer has pKa = 4.80 and [A⁻]/[HA] = 10. What is its approximate pH?",
   "options": [
    "3.80",
    "4.80",
    "5.80",
    "48.0"
   ],
   "answer": 2,
   "explanation": "Use pH = pKa + log₁₀([A⁻]/[HA]). Since log₁₀10 = 1, pH = 4.80 + 1.00 = 5.80."
  },
  {
   "id": "ah-expand-b01-036",
   "topic": "equil",
   "q": "A buffer contains HA and A⁻. Which reaction mainly removes a small addition of H⁺?",
   "options": [
    "HA + H⁺ → A⁻",
    "H⁺ → H₂ + e⁻",
    "A⁻ → H⁺ + HA",
    "A⁻ + H⁺ → HA"
   ],
   "answer": 3,
   "explanation": "The conjugate base A⁻ accepts added protons to form HA. This limits the increase in free hydrogen ion concentration and therefore limits the pH change."
  },
  {
   "id": "ah-expand-b01-037",
   "topic": "equil",
   "q": "At 25 °C, [OH⁻] = 2.0 × 10⁻⁴ mol l⁻¹. What is pH? Use Kw = 1.0 × 10⁻¹⁴ mol² l⁻².",
   "options": [
    "10.30",
    "3.70",
    "9.70",
    "4.30"
   ],
   "answer": 0,
   "explanation": "[H⁺] = Kw/[OH⁻] = 5.0 × 10⁻¹¹ mol l⁻¹. Thus pH = −log₁₀(5.0 × 10⁻¹¹) = 10.30; 3.70 is pOH."
  },
  {
   "id": "ah-expand-b01-038",
   "topic": "equil",
   "q": "Equal volumes of 0.100 mol l⁻¹ HA and 0.100 mol l⁻¹ NaOH react completely. Is the final mixture necessarily an HA/A⁻ buffer?",
   "options": [
    "Yes, because any acid–base mixture is a buffer",
    "No, because the HA has been consumed completely",
    "Yes, because neutralisation always gives pH 7",
    "No, because sodium ions prevent all buffering"
   ],
   "answer": 1,
   "explanation": "Equal amounts react 1:1, leaving conjugate base but no substantial unreacted weak acid. A buffer requires appreciable amounts of both HA and A⁻."
  },
  {
   "id": "ah-expand-b01-039",
   "topic": "equil",
   "q": "An indicator follows HIn ⇌ H⁺ + In⁻. At pH = pKa, what is the ratio [In⁻]:[HIn]?",
   "options": [
    "10:1",
    "1:10",
    "1:1",
    "100:1"
   ],
   "answer": 2,
   "explanation": "Ka = [H⁺][In⁻]/[HIn]. At pH = pKa, [H⁺] = Ka, so [In⁻]/[HIn] = 1. Colour change still occurs over a range rather than at one exact pH."
  },
  {
   "id": "ah-expand-b01-040",
   "topic": "equil",
   "q": "A weak acid’s Ka increases when temperature rises. What does this imply about its ionisation enthalpy?",
   "options": [
    "Ionisation is exothermic over that range",
    "A catalyst must have been added",
    "The acid has become a strong acid by definition",
    "Ionisation is endothermic over that range"
   ],
   "answer": 3,
   "explanation": "Heating favours the endothermic direction. An increase in Ka means greater product favouring for HA ⇌ H⁺ + A⁻, so ionisation is endothermic over the range considered."
  },
  {
   "id": "ah-expand-b01-041",
   "topic": "kinetics",
   "q": "Tripling [A] at fixed [B] increases the initial rate ninefold. What is the order with respect to A?",
   "options": [
    "2",
    "0",
    "1",
    "3"
   ],
   "answer": 0,
   "explanation": "If rate is proportional to [A]ⁿ, tripling gives 3ⁿ = 9. Therefore n = 2; the order comes from concentration–rate measurements."
  },
  {
   "id": "ah-expand-b01-042",
   "topic": "kinetics",
   "q": "Doubling [B] leaves the initial rate unchanged while other conditions are fixed. What does this show?",
   "options": [
    "B cannot appear in the overall reaction",
    "The reaction is zero order with respect to B over the tested range",
    "B must be the solvent",
    "The rate constant has doubled"
   ],
   "answer": 1,
   "explanation": "A zero-order factor is [B]⁰ = 1, so changing B does not affect the rate in the measured range. B can still be involved in the overall chemistry."
  },
  {
   "id": "ah-expand-b01-043",
   "topic": "kinetics",
   "q": "For rate = k[A]², rate is 0.018 mol l⁻¹ s⁻¹ at [A] = 0.30 mol l⁻¹. What is k?",
   "options": [
    "0.060 s⁻¹",
    "0.054 mol² l⁻² s⁻¹",
    "0.20 l mol⁻¹ s⁻¹",
    "2.0 l mol⁻¹ s⁻¹"
   ],
   "answer": 2,
   "explanation": "k = rate/[A]² = 0.018/0.090 = 0.20. Dividing mol l⁻¹ s⁻¹ by mol² l⁻² gives l mol⁻¹ s⁻¹."
  },
  {
   "id": "ah-expand-b01-044",
   "topic": "kinetics",
   "q": "What are the units of k for an overall third-order reaction if rate is in mol l⁻¹ s⁻¹?",
   "options": [
    "s⁻¹",
    "l mol⁻¹ s⁻¹",
    "mol l⁻¹ s⁻¹",
    "l² mol⁻² s⁻¹"
   ],
   "answer": 3,
   "explanation": "Divide rate units by concentration cubed: (mol l⁻¹ s⁻¹)/(mol³ l⁻³) = l² mol⁻² s⁻¹. The units depend on overall order."
  },
  {
   "id": "ah-expand-b01-045",
   "topic": "kinetics",
   "q": "For rate = k[A][B], [A] is doubled and [B] is halved at fixed temperature. What is the new rate relative to the original?",
   "options": [
    "Unchanged",
    "Twice as large",
    "Half as large",
    "Four times as large"
   ],
   "answer": 0,
   "explanation": "The two factors multiply: 2 × 1/2 = 1. The effects cancel because the reaction is first order in each reactant and k is unchanged."
  },
  {
   "id": "ah-expand-b01-046",
   "topic": "kinetics",
   "q": "A reaction has rate = k[A]² and stoichiometry 2A + B → products. What can be concluded about B?",
   "options": [
    "It is absent from the balanced equation",
    "Its concentration does not affect the measured rate within the tested range",
    "Its concentration must always equal [A]",
    "It is necessarily the catalyst"
   ],
   "answer": 1,
   "explanation": "The experimental rate law contains no B factor, indicating zero order in B in that range. Stoichiometric coefficients alone do not determine the rate law."
  },
  {
   "id": "ah-expand-b01-047",
   "topic": "kinetics",
   "q": "Which statement about a proposed reaction mechanism is essential?",
   "options": [
    "Its slow step must contain every reactant",
    "It can have any overall equation if one step is fast",
    "It must sum to the overall reaction and be consistent with the experimental rate equation",
    "It proves the rate equation from stoichiometry alone"
   ],
   "answer": 2,
   "explanation": "A plausible mechanism needs both stoichiometric and kinetic consistency. Agreement does not uniquely prove it, because more than one mechanism can sometimes fit the same evidence."
  },
  {
   "id": "ah-expand-b01-048",
   "topic": "kinetics",
   "q": "For a first-order dependence on A, what is the effect of reducing [A] from 0.80 to 0.20 mol l⁻¹ at fixed temperature?",
   "options": [
    "The rate becomes one sixteenth",
    "The rate becomes four times greater",
    "The rate stays unchanged",
    "The rate becomes one quarter"
   ],
   "answer": 3,
   "explanation": "First order means rate is directly proportional to [A]. The concentration ratio is 0.20/0.80 = 1/4, so the rate has the same ratio."
  },
  {
   "id": "ah-expand-b01-049",
   "topic": "kinetics",
   "q": "At one temperature, rate = k[A][B]². What happens to the overall order if a catalyst changes the mechanism?",
   "options": [
    "It may change and must be determined experimentally for the catalysed reaction",
    "It must remain three for every possible mechanism",
    "It always becomes zero",
    "It becomes equal to the catalyst’s oxidation state"
   ],
   "answer": 0,
   "explanation": "The rate equation reflects the operative mechanism and experimental conditions. A different catalytic pathway can have a different rate law, so its order cannot be assumed unchanged."
  },
  {
   "id": "ah-expand-b01-050",
   "topic": "kinetics",
   "q": "Initial data show that doubling A doubles rate, and doubling B at fixed A also doubles rate. What is the overall order?",
   "options": [
    "1",
    "2",
    "3",
    "4"
   ],
   "answer": 1,
   "explanation": "The reaction is first order in A and first order in B, giving rate = k[A][B]. Overall order is the sum of these powers: 1 + 1 = 2."
  },
  {
   "id": "ah-expand-b01-051",
   "topic": "feasible",
   "q": "A reaction has ΔG° = +12.0 kJ mol⁻¹ at 300 K and ΔS° = +80.0 J K⁻¹ mol⁻¹. What is ΔH°?",
   "options": [
    "−12.0 kJ mol⁻¹",
    "+12.08 kJ mol⁻¹",
    "+36.0 kJ mol⁻¹",
    "−36.0 kJ mol⁻¹"
   ],
   "answer": 2,
   "explanation": "Rearrange ΔG° = ΔH° − TΔS° to ΔH° = ΔG° + TΔS°. Convert entropy to 0.0800 kJ K⁻¹ mol⁻¹: 12.0 + 300 × 0.0800 = +36.0 kJ mol⁻¹."
  },
  {
   "id": "ah-expand-b01-052",
   "topic": "feasible",
   "q": "Calculate ΔG° at 350 K for ΔH° = −60.0 kJ mol⁻¹ and ΔS° = −100 J K⁻¹ mol⁻¹.",
   "options": [
    "−95.0 kJ mol⁻¹",
    "+25.0 kJ mol⁻¹",
    "−35060 kJ mol⁻¹",
    "−25.0 kJ mol⁻¹"
   ],
   "answer": 3,
   "explanation": "Convert entropy to −0.100 kJ K⁻¹ mol⁻¹. ΔG° = ΔH° − TΔS° = −60.0 − 350(−0.100) = −25.0 kJ mol⁻¹."
  },
  {
   "id": "ah-expand-b01-053",
   "topic": "feasible",
   "q": "Which entropy change is usually positive for the same substance?",
   "options": [
    "Vaporisation of a liquid",
    "Freezing of a liquid",
    "Condensation of a gas",
    "Deposition of a gas into a solid"
   ],
   "answer": 0,
   "explanation": "Gas particles have many more accessible arrangements than particles in a liquid. Vaporisation therefore usually increases entropy; the opposite changes listed decrease it."
  },
  {
   "id": "ah-expand-b01-054",
   "topic": "feasible",
   "q": "For 2A(g) → B(g), S°(A) = 180 and S°(B) = 250 J K⁻¹ mol⁻¹. What is ΔS°?",
   "options": [
    "+70 J K⁻¹ mol⁻¹",
    "−110 J K⁻¹ mol⁻¹",
    "+110 J K⁻¹ mol⁻¹",
    "−430 J K⁻¹ mol⁻¹"
   ],
   "answer": 1,
   "explanation": "Use products minus reactants, including coefficients: ΔS° = 250 − 2 × 180 = −110 J K⁻¹ mol⁻¹. The factor of two is essential."
  },
  {
   "id": "ah-expand-b01-055",
   "topic": "feasible",
   "q": "A process has ΔH° < 0 and ΔS° > 0. What does ΔG° = ΔH° − TΔS° predict for positive temperatures?",
   "options": [
    "ΔG° is positive at all temperatures",
    "It is favourable only below a single threshold",
    "ΔG° is negative at all positive temperatures if these signs persist",
    "It is favourable only if a catalyst changes ΔH°"
   ],
   "answer": 2,
   "explanation": "Both the negative enthalpy term and the negative −TΔS° term favour a negative ΔG°. The conclusion assumes the stated signs remain applicable over the temperature range."
  },
  {
   "id": "ah-expand-b01-056",
   "topic": "feasible",
   "q": "A process has ΔH° > 0 and ΔS° < 0. Which statement follows from the standard free-energy equation?",
   "options": [
    "ΔG° must become negative at high temperature",
    "The entropy term cancels at every temperature",
    "A catalyst makes ΔG° negative",
    "Both contributions make ΔG° positive at positive T"
   ],
   "answer": 3,
   "explanation": "Positive ΔH° and negative ΔS° give ΔG° = positive + positive for T > 0. A catalyst affects rate rather than changing these state-function differences."
  },
  {
   "id": "ah-expand-b01-057",
   "topic": "feasible",
   "q": "A thermodynamically favourable reaction is extremely slow at room temperature. What explains this?",
   "options": [
    "A large activation-energy barrier can limit its rate",
    "Negative ΔG° guarantees a fast reaction",
    "Its entropy must be exactly zero",
    "It violates conservation of energy"
   ],
   "answer": 0,
   "explanation": "Thermodynamic favourability and reaction rate are different questions. A negative free-energy change does not remove the kinetic barrier to reaching the products."
  },
  {
   "id": "ah-expand-b01-058",
   "topic": "feasible",
   "q": "At equilibrium in a reacting mixture, which free-energy statement is correct?",
   "options": [
    "ΔG° must always be zero",
    "The actual reaction ΔG is zero",
    "ΔH° must always be zero",
    "The mixture has no stored energy"
   ],
   "answer": 1,
   "explanation": "At equilibrium there is no net driving force, so actual ΔG = 0. Standard ΔG° need not be zero because it refers to standard-state conditions rather than necessarily the equilibrium composition."
  },
  {
   "id": "ah-expand-b01-059",
   "topic": "feasible",
   "q": "For a reaction with positive ΔS°, what happens to a graph of ΔG° against T if ΔH° and ΔS° are treated as constants?",
   "options": [
    "It is a straight line with positive gradient",
    "It is always horizontal",
    "It is a straight line with negative gradient",
    "It must pass through the origin"
   ],
   "answer": 2,
   "explanation": "ΔG° = ΔH° − TΔS° has intercept ΔH° and gradient −ΔS°. A positive entropy change gives a negative slope; the intercept need not be zero."
  },
  {
   "id": "ah-expand-b01-060",
   "topic": "feasible",
   "q": "A reaction has ΔH° = +15.0 kJ mol⁻¹ and ΔG° = −5.0 kJ mol⁻¹ at 400 K. What is ΔS°?",
   "options": [
    "−50 J K⁻¹ mol⁻¹",
    "+25 J K⁻¹ mol⁻¹",
    "−25 J K⁻¹ mol⁻¹",
    "+50 J K⁻¹ mol⁻¹"
   ],
   "answer": 3,
   "explanation": "Rearrange to ΔS° = (ΔH° − ΔG°)/T. This gives (15.0 − (−5.0))/400 = 0.050 kJ K⁻¹ mol⁻¹ = +50 J K⁻¹ mol⁻¹."
  },
  {
   "id": "ah-expand-b01-061",
   "topic": "structure",
   "q": "Which carbon atom is a stereogenic centre in CH₃CH(OH)CH₂CH₃?",
   "options": [
    "Carbon 2",
    "Carbon 1",
    "Carbon 3",
    "Carbon 4"
   ],
   "answer": 0,
   "explanation": "Carbon 2 is bonded to H, OH, CH₃ and CH₂CH₃, four different groups. The other carbons have repeated hydrogen substituents and are not stereogenic centres."
  },
  {
   "id": "ah-expand-b01-062",
   "topic": "structure",
   "q": "What structural condition is required for geometric isomerism around a C=C bond?",
   "options": [
    "The molecule contains any two identical carbon atoms",
    "Each double-bond carbon has two different substituents",
    "One double-bond carbon has two hydrogens",
    "The molecule rotates freely around the double bond"
   ],
   "answer": 1,
   "explanation": "Restricted C=C rotation preserves two arrangements only when each carbon has two different groups. If one carbon has identical substituents, the arrangements are indistinguishable."
  },
  {
   "id": "ah-expand-b01-063",
   "topic": "mechanisms",
   "q": "In an SN2 substitution, where does the nucleophile approach relative to the leaving group?",
   "options": [
    "From the same side as the leaving group only",
    "At the nucleus of a remote hydrogen",
    "From the opposite side of the carbon",
    "At a metal catalyst without approaching carbon"
   ],
   "answer": 2,
   "explanation": "Backside attack provides overlap with the C–leaving-group antibonding orbital and leads to inversion of configuration at a stereogenic reacting centre."
  },
  {
   "id": "ah-expand-b01-064",
   "topic": "mechanisms",
   "q": "What is the origin of the electron pair at the tail of a curly arrow from OH⁻ attacking a halogenoalkane?",
   "options": [
    "A proton on oxygen",
    "The nucleus of the reacting carbon",
    "An empty orbital on hydroxide",
    "A lone pair on oxygen"
   ],
   "answer": 3,
   "explanation": "A curly arrow shows movement of an electron pair. The nucleophile donates an oxygen lone pair towards the electrophilic carbon; the arrow must start at that pair."
  },
  {
   "id": "ah-expand-b01-065",
   "topic": "mechanisms",
   "q": "Which reagent converts a nitrile R–C≡N into a primary amine R–CH₂NH₂?",
   "options": [
    "LiAlH₄ followed by appropriate aqueous work-up",
    "Acidified dichromate under reflux",
    "Bromine water alone",
    "Concentrated sulfuric acid alone"
   ],
   "answer": 0,
   "explanation": "LiAlH₄ reduces the nitrile group to a primary amine. An appropriate work-up completes product formation; oxidising reagents do not carry out this reduction."
  },
  {
   "id": "ah-expand-b01-066",
   "topic": "mechanisms",
   "q": "A halogenoalkane reacts with CN⁻ to form a nitrile. How does the carbon count change in the product?",
   "options": [
    "It decreases by one",
    "It increases by one",
    "It doubles in every case",
    "It never changes"
   ],
   "answer": 1,
   "explanation": "The carbon atom of the cyanide group becomes part of the organic product. Nucleophilic substitution therefore extends the carbon chain by one carbon."
  },
  {
   "id": "ah-expand-b01-067",
   "topic": "mechanisms",
   "q": "Why does benzene generally undergo substitution rather than ordinary addition?",
   "options": [
    "Benzene contains only single bonds with no π electrons",
    "Benzene is an ionic lattice",
    "Substitution can restore its stabilised delocalised π system",
    "Addition always increases aromatic stabilisation"
   ],
   "answer": 2,
   "explanation": "Electrophilic substitution temporarily disrupts aromaticity, then loss of H⁺ restores it. Simple addition would remove aromatic stabilisation from the final product."
  },
  {
   "id": "ah-expand-b01-068",
   "topic": "mechanisms",
   "q": "What organic product forms when ethanoyl chloride reacts with ethanol?",
   "options": [
    "Ethyl propanoate",
    "Ethanoic anhydride",
    "Ethanal",
    "Ethyl ethanoate"
   ],
   "answer": 3,
   "explanation": "Ethanol reacts at the acyl chloride carbonyl carbon, replacing Cl with an ethoxy group. The organic product is CH₃COOCH₂CH₃, ethyl ethanoate; HCl is also formed."
  },
  {
   "id": "ah-expand-b01-069",
   "topic": "structure",
   "q": "Which pair are enantiomers?",
   "options": [
    "Two non-superimposable mirror images of the same chiral molecule",
    "Two compounds with different molecular formulae",
    "Two freely rotating conformations of ethane",
    "A ketone and its corresponding aldehyde"
   ],
   "answer": 0,
   "explanation": "Enantiomers have the same connectivity but opposite handedness as non-superimposable mirror images. Structural isomers differ in connectivity and are a different relationship."
  },
  {
   "id": "ah-expand-b01-070",
   "topic": "medicines",
   "q": "Why can an antagonist prevent a natural agonist from acting at a receptor?",
   "options": [
    "It must always have a larger molecular mass than the agonist",
    "It binds without activating the receptor and can block agonist binding",
    "It necessarily destroys the receptor’s covalent structure",
    "It is defined by having no affinity for the receptor"
   ],
   "answer": 1,
   "explanation": "An antagonist has affinity but does not produce the agonist’s activation response. Occupying the site can prevent agonist binding; size alone does not define antagonism."
  },
  {
   "id": "ah-expand-b01-071",
   "topic": "spectro",
   "q": "A compound’s molecular ion is at m/z 72 and a fragment is at m/z 57. What neutral mass loss does this imply for singly charged ions?",
   "options": [
    "129",
    "1.26",
    "15",
    "57"
   ],
   "answer": 2,
   "explanation": "The difference is 72 − 57 = 15 mass units, consistent with loss of CH₃• in a suitable fragmentation. A mass difference supports an assignment but does not uniquely determine the full structure."
  },
  {
   "id": "ah-expand-b01-072",
   "topic": "spectro",
   "q": "A molecule has two chlorine isotopes with abundances 75% ³⁵Cl and 25% ³⁷Cl. For a molecular ion containing one Cl, what approximate M:M+2 ratio is expected?",
   "options": [
    "1:1",
    "1:3",
    "9:6",
    "3:1"
   ],
   "answer": 3,
   "explanation": "One chlorine atom gives two isotopic molecular-ion peaks separated by two mass units. Their intensities follow the isotope abundances, approximately 75:25 = 3:1."
  },
  {
   "id": "ah-expand-b01-073",
   "topic": "spectro",
   "q": "Which combined IR evidence most strongly supports a carboxylic acid?",
   "options": [
    "A carbonyl absorption plus a very broad acidic O–H absorption",
    "A C–H absorption alone",
    "No absorption anywhere in the spectrum",
    "A narrow N–H absorption with no carbonyl"
   ],
   "answer": 0,
   "explanation": "A carboxyl group contains both C=O and O–H. The broad acidic OH feature plus carbonyl is more diagnostic than an ordinary C–H absorption alone."
  },
  {
   "id": "ah-expand-b01-074",
   "topic": "spectro",
   "q": "Ignoring the exchangeable OH signal, how many proton environments are present in propan-1-ol, CH₃CH₂CH₂OH?",
   "options": [
    "1",
    "3",
    "2",
    "6"
   ],
   "answer": 1,
   "explanation": "The terminal CH₃, middle CH₂ and CH₂ next to oxygen are in three different environments. The OH proton would add another signal but is explicitly excluded."
  },
  {
   "id": "ah-expand-b01-075",
   "topic": "spectro",
   "q": "In a simple first-order ¹H NMR spectrum, a CH₃ group next to CH₂ is split into what pattern by those two equivalent neighbours?",
   "options": [
    "Doublet",
    "Quartet",
    "Triplet",
    "Singlet"
   ],
   "answer": 2,
   "explanation": "The n + 1 rule gives 2 + 1 = 3 lines, a triplet. The three hydrogens in the observed CH₃ group determine integration, not their own splitting."
  },
  {
   "id": "ah-expand-b01-076",
   "topic": "spectro",
   "q": "A ¹H NMR signal appears as a quartet. What does this splitting pattern show?",
   "options": [
    "The protons giving the signal have three equivalent neighbouring protons",
    "There are four different proton environments in the molecule",
    "The signal arises from four equivalent protons",
    "The molecule contains four carbon atoms"
   ],
   "answer": 0,
   "explanation": "A quartet is one signal split into four lines by coupling to three equivalent neighbouring protons (the n + 1 rule). Integration gives the relative number of protons in that environment, while the splitting gives the number of neighbouring protons."
  },
  {
   "id": "ah-expand-b01-077",
   "topic": "spectro",
   "q": "A solution has absorbance 0.28 at 0.040 mmol l⁻¹. At the same path length, what absorbance is expected at 0.060 mmol l⁻¹ within the linear range?",
   "options": [
    "0.42",
    "0.187",
    "0.84",
    "0.020"
   ],
   "answer": 0,
   "explanation": "Beer–Lambert proportionality gives A₂ = 0.28 × 0.060/0.040 = 0.42. This assumes the same species, wavelength and optical path length."
  },
  {
   "id": "ah-expand-b01-078",
   "topic": "practical",
   "q": "A TLC spot has Rf = 0.60 in a particular solvent. If the solvent front travels 7.0 cm under the same conditions, how far should the spot travel?",
   "options": [
    "11.7 cm",
    "4.2 cm",
    "6.4 cm",
    "0.086 cm"
   ],
   "answer": 1,
   "explanation": "Rearrange Rf = spot distance/front distance. Spot distance = 0.60 × 7.0 = 4.2 cm, measured from the same origin as the solvent front."
  },
  {
   "id": "ah-expand-b01-079",
   "topic": "spectro",
   "q": "Which observation is expected for the ¹H NMR spectrum of propanone, CH₃COCH₃, in a simple interpretation?",
   "options": [
    "Two doublets each integrating to three hydrogens",
    "One quartet integrating to six hydrogens",
    "One singlet integrating to six hydrogens",
    "Six separate singlets each integrating to one hydrogen"
   ],
   "answer": 2,
   "explanation": "The two methyl groups are equivalent by symmetry, giving one environment. The neighbouring carbonyl carbon has no hydrogens, so the methyl signal is a singlet."
  },
  {
   "id": "ah-expand-b01-080",
   "topic": "spectro",
   "q": "A sample contains only C, H and O, has molecular mass 60, and shows a broad alcohol O–H absorption without a carbonyl. Which candidate best fits?",
   "options": [
    "Ethanoic acid, C₂H₄O₂",
    "Propanone, C₃H₆O",
    "Ethyl ethanoate, C₄H₈O₂",
    "Propan-1-ol, C₃H₈O"
   ],
   "answer": 3,
   "explanation": "C₃H₈O has mass 3 × 12 + 8 × 1 + 16 = 60 and contains an alcohol OH without C=O. Ethanoic acid also has mass 60 but requires a carbonyl absorption."
  },
  {
   "id": "ah-expand-b01-081",
   "topic": "stoich",
   "q": "A 250.0 cm³ standard solution requires 0.0500 mol l⁻¹ anhydrous Na₂CO₃. What mass is needed? GFM = 106.0 g.",
   "options": [
    "1.325 g",
    "5.300 g",
    "0.01325 g",
    "1325 g"
   ],
   "answer": 0,
   "explanation": "n = cV = 0.0500 × 0.2500 = 0.01250 mol. Mass = 0.01250 × 106.0 = 1.325 g. Make up to the final volume after dissolution and quantitative transfer."
  },
  {
   "id": "ah-expand-b01-082",
   "topic": "practical",
   "q": "A solid is weighed by difference: container plus solid is 18.642 g before transfer and 17.913 g afterwards. What mass was removed?",
   "options": [
    "36.555 g",
    "0.729 g",
    "0.073 g",
    "1.271 g"
   ],
   "answer": 1,
   "explanation": "Mass removed = 18.642 − 17.913 = 0.729 g. This establishes mass leaving the container; it does not prove that none was lost on the way to the receiving flask."
  },
  {
   "id": "ah-expand-b01-083",
   "topic": "practical",
   "q": "Why rinse a precipitate before drying it for gravimetric analysis?",
   "options": [
    "To increase its mass by adding more dissolved salt",
    "To convert every precipitate into a gas",
    "To remove soluble impurities adhering to the solid",
    "To change the equation’s mole ratio"
   ],
   "answer": 2,
   "explanation": "Washing removes residual mother liquor and dissolved impurities that could otherwise inflate the dried mass. The wash liquid must be chosen to avoid significant dissolution of the precipitate."
  },
  {
   "id": "ah-expand-b01-084",
   "topic": "stoich",
   "q": "A precipitate contains 0.00300 mol BaSO₄. What mass of sulfate ions does this represent? GFM(SO₄²⁻) = 96.0 g.",
   "options": [
    "0.699 g",
    "32.0 g",
    "0.0288 g",
    "0.288 g"
   ],
   "answer": 3,
   "explanation": "Each BaSO₄ formula unit contains one sulfate ion, so n(SO₄²⁻) = 0.00300 mol. Mass = 0.00300 × 96.0 = 0.288 g, not the mass of the entire precipitate."
  },
  {
   "id": "ah-expand-b01-085",
   "topic": "practical",
   "q": "Why cool a recrystallisation mixture slowly before final ice-bath cooling?",
   "options": [
    "To favour crystal growth while allowing impurities to remain in the mother liquor",
    "To make all impurities crystallise first by definition",
    "To prevent any crystals forming",
    "To force the solvent to react with the product"
   ],
   "answer": 0,
   "explanation": "Slow initial cooling promotes orderly crystal growth and can reduce impurity trapping. Final cooling improves recovery, although purification and yield must be balanced."
  },
  {
   "id": "ah-expand-b01-086",
   "topic": "practical",
   "q": "A purified solid has a narrow melting range matching a reference. What does a mixed melting point without depression provide?",
   "options": [
    "Proof that the substance contains no atoms of oxygen",
    "Additional support for identity, rather than absolute proof",
    "A measurement of its molecular mass",
    "Evidence that the material is definitely a mixture of unrelated solids"
   ],
   "answer": 1,
   "explanation": "An unchanged mixed melting point supports the sample and reference being the same compound. It is useful alongside other evidence, but should not be presented as infallible proof."
  },
  {
   "id": "ah-expand-b01-087",
   "topic": "practical",
   "q": "An organic product in a separating funnel forms the upper layer. What information is needed before deciding which layer to keep?",
   "options": [
    "Only the colour of the funnel tap",
    "The boiling point of the glass",
    "Which solvent contains the product and the relative densities of the layers",
    "A rule that the upper layer is always aqueous"
   ],
   "answer": 2,
   "explanation": "Layer position depends on density, and the product distribution depends on solubility. Some organic solvents are denser than water, so the organic layer is not always uppermost."
  },
  {
   "id": "ah-expand-b01-088",
   "topic": "stoich",
   "q": "An aliquot of 20.0 cm³ is diluted to 100.0 cm³. The diluted solution contains 0.0120 mol l⁻¹ analyte. What was the original concentration?",
   "options": [
    "0.00240 mol l⁻¹",
    "0.0120 mol l⁻¹",
    "0.600 mol l⁻¹",
    "0.0600 mol l⁻¹"
   ],
   "answer": 3,
   "explanation": "The dilution factor is 100.0/20.0 = 5. Original concentration = 5 × 0.0120 = 0.0600 mol l⁻¹. Concentration falls on dilution while solute moles are conserved."
  },
  {
   "id": "ah-expand-b01-089",
   "topic": "practical",
   "q": "Two students use the same burette with a constant reading offset. Why can the delivered titre still be correct?",
   "options": [
    "The same offset cancels when the initial reading is subtracted from the final reading",
    "All burette errors cancel in every experiment",
    "A constant offset changes the reaction ratio to compensate",
    "The final reading alone is always the titre"
   ],
   "answer": 0,
   "explanation": "If both readings have the same additive offset, (final + offset) − (initial + offset) equals final − initial. This does not cancel scale errors, air bubbles or different reading errors."
  },
  {
   "id": "ah-expand-b01-090",
   "topic": "practical",
   "q": "A reaction mixture gives one TLC spot matching the desired product. What is the best interpretation?",
   "options": [
    "It proves 100% chemical purity",
    "It supports the desired product’s presence, but co-eluting or undetected impurities remain possible",
    "It gives the product’s molecular mass directly",
    "It shows that the reaction yield is exactly 100%"
   ],
   "answer": 1,
   "explanation": "TLC has finite resolving and detection power. A single matching spot is useful evidence, but another substance may have the same Rf or fail to appear with the chosen visualisation."
  },
  {
   "id": "spectra-w01",
   "topic": "spectra",
   "type": "written",
   "marks": 4,
   "q": "Sodium emits light of wavelength 589 nm.\n(a) Calculate the frequency of this light. (1)\n(b) Calculate the energy of one photon, in J. (1)\n(c) Calculate the energy emitted when one mole of these photons is produced, in kJ mol⁻¹. (2)\n(h = 6.63 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; L = 6.02 × 10²³ mol⁻¹)",
   "points": [
    {
     "t": "(a) ν = c ÷ λ = 3.00 × 10⁸ ÷ 589 × 10⁻⁹ = 5.09e+14 Hz",
     "m": 1
    },
    {
     "t": "(b) E = hν = 6.63 × 10⁻³⁴ × 5.09e+14 = 3.38e-19 J",
     "m": 1
    },
    {
     "t": "(c) E = Lhν = 6.02 × 10²³ × 3.38e-19 = 2.033e+05 J mol⁻¹",
     "m": 1
    },
    {
     "t": "= 203 kJ mol⁻¹",
     "m": 1
    }
   ],
   "model": "(a) ν = c ÷ λ = (3.00 × 10⁸) ÷ (589 × 10⁻⁹) = 5.09e+14 s⁻¹. (b) E = hν = 6.63 × 10⁻³⁴ × 5.09e+14 = 3.38e-19 J per photon. (c) For one mole E = L h ν = 6.02 × 10²³ × 3.38e-19 = 2.033e+05 J mol⁻¹ = 203 kJ mol⁻¹.",
   "explanation": "Convert wavelength from nm to m (× 10⁻⁹) before using c = νλ."
  },
  {
   "id": "spectra-w02",
   "topic": "spectra",
   "type": "written",
   "marks": 3,
   "q": "Explain how an atomic emission spectrum of hydrogen is produced and why it consists of lines of particular frequencies.",
   "points": [
    {
     "t": "Electrons are excited (by heat or electrical energy) to higher energy levels",
     "m": 1
    },
    {
     "t": "When they fall back to lower levels, energy is emitted as a photon (light)",
     "m": 1
    },
    {
     "t": "The energy levels are fixed (quantised), so the energy difference ΔE = hν has specific values, giving lines of definite frequency",
     "m": 1
    }
   ],
   "model": "Heating or passing a current through the gas promotes electrons to higher energy levels. These excited electrons fall back to lower levels and the energy difference is released as a photon with energy ΔE = hν. Because the energy levels are quantised, only certain energy differences, and so only certain frequencies, are possible, giving a line spectrum."
  },
  {
   "id": "spectra-w03",
   "topic": "spectra",
   "type": "written",
   "marks": 2,
   "q": "State one difference between an atomic emission spectrum and an atomic absorption spectrum of the same element.",
   "points": [
    {
     "t": "Emission spectrum: bright lines on a dark background (light emitted when electrons fall to lower levels)",
     "m": 1
    },
    {
     "t": "Absorption spectrum: dark lines on a continuous spectrum at the same frequencies (light absorbed when electrons are promoted)",
     "m": 1
    }
   ],
   "model": "In an emission spectrum, coloured lines appear against a dark background as excited electrons drop to lower levels. In an absorption spectrum, dark lines appear in a continuous spectrum at the same frequencies because those frequencies are absorbed as electrons are promoted."
  },
  {
   "id": "spectra-x01",
   "topic": "spectra",
   "q": "Which expression gives the energy, in J mol⁻¹, of one mole of photons of frequency ν?",
   "options": [
    "E = h ν",
    "E = h ÷ ν",
    "E = L ÷ (h ν)",
    "E = L h ν"
   ],
   "answer": 3,
   "explanation": "One photon has energy hν; multiplying by the Avogadro constant L gives the energy of one mole of photons."
  },
  {
   "id": "spectra-x02",
   "topic": "spectra",
   "q": "Which change in an atom gives rise to a line in its atomic emission spectrum?",
   "options": [
    "An electron is removed from the atom",
    "An electron falls from a higher to a lower energy level",
    "An electron moves into a higher energy level",
    "A nucleus emits a photon"
   ],
   "answer": 1,
   "explanation": "Photons are emitted when excited electrons fall to lower energy levels; the photon energy equals the difference in energy between the levels."
  },
  {
   "id": "orbitals-w01",
   "topic": "orbitals",
   "type": "written",
   "marks": 4,
   "q": "(a) Write the electron configuration of an iron atom using the notation 1s² 2s² … (2)\n(b) Write the electron configuration of the Fe³⁺ ion using [Ar] notation. (1)\n(c) Explain why the Fe³⁺ ion is relatively stable. (1)",
   "points": [
    {
     "t": "(a) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²  (accept 3d⁶ 4s² written in either order)",
     "m": 2
    },
    {
     "t": "(b) [Ar] 3d⁵",
     "m": 1
    },
    {
     "t": "(c) The 3d subshell is exactly half full, which is a relatively stable arrangement",
     "m": 1
    }
   ],
   "model": "(a) Iron has 26 electrons: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s². (b) The 4s electrons are lost first, followed by one 3d electron: Fe³⁺ is [Ar] 3d⁵. (c) A half-filled d subshell, with one electron in each orbital, is particularly stable."
  },
  {
   "id": "orbitals-w02",
   "topic": "orbitals",
   "type": "written",
   "marks": 2,
   "q": "The electron configuration of chromium is [Ar] 3d⁵ 4s¹, not [Ar] 3d⁴ 4s². Explain why.",
   "points": [
    {
     "t": "Half-filled 3d and 4s subshells are particularly stable",
     "m": 1
    },
    {
     "t": "The extra stability gained (less electron repulsion with each orbital singly occupied) outweighs the energy needed to promote a 4s electron into the 3d subshell",
     "m": 1
    }
   ],
   "model": "Having one electron in each of the five 3d orbitals and one in 4s gives a half-filled subshell arrangement with minimal electron–electron repulsion and extra stability. This is more favourable than 3d⁴ 4s², so one 4s electron moves into the 3d subshell."
  },
  {
   "id": "orbitals-w03",
   "topic": "orbitals",
   "type": "written",
   "marks": 3,
   "q": "State (a) the Pauli exclusion principle, (b) Hund's rule and (c) the Aufbau principle.",
   "points": [
    {
     "t": "(a) An orbital can hold a maximum of two electrons, which must have opposite spins",
     "m": 1
    },
    {
     "t": "(b) Electrons occupy degenerate orbitals singly, with parallel spins, before pairing",
     "m": 1
    },
    {
     "t": "(c) Electrons fill the lowest energy orbitals first (building up the configuration)",
     "m": 1
    }
   ],
   "model": "(a) Each orbital holds at most two electrons and they must have opposite spins. (b) Orbitals of equal energy are filled singly with parallel spins before any are doubly occupied. (c) Electrons occupy orbitals in order of increasing energy."
  },
  {
   "id": "orbitals-w04",
   "topic": "orbitals",
   "type": "written",
   "marks": 3,
   "q": "In transition metals the 4s orbital fills before the 3d, but when a transition metal atom forms an ion the 4s electrons are lost first. Explain this apparent contradiction.",
   "points": [
    {
     "t": "For neutral atoms the 4s orbital is lower in energy than the 3d, so it is filled first",
     "m": 1
    },
    {
     "t": "Once the 3d orbitals contain electrons, they become lower in energy than 4s (because of electron repulsion / the changed nuclear attraction)",
     "m": 1
    },
    {
     "t": "So the 4s electrons are the highest-energy electrons and are removed first",
     "m": 1
    }
   ],
   "model": "In the neutral atoms the 4s orbital is slightly lower in energy than 3d, so it fills first. As the 3d orbitals fill, they are stabilised more than 4s and so the 4s electrons end up at the higher energy level and are the first to be lost on ionisation."
  },
  {
   "id": "orbitals-x01",
   "topic": "orbitals",
   "q": "How many orbitals are there in a d subshell?",
   "options": [
    "3",
    "7",
    "10",
    "5"
   ],
   "answer": 3,
   "explanation": "s has 1 orbital, p has 3, d has 5 and f has 7."
  },
  {
   "id": "orbitals-x02",
   "topic": "orbitals",
   "q": "What is the electron configuration of a copper atom?",
   "options": [
    "[Ar] 3d⁹ 4s²",
    "[Ar] 3d¹⁰ 4s¹",
    "[Ar] 3d¹⁰ 4s²",
    "[Ar] 3d⁸ 4s¹ 4p²"
   ],
   "answer": 1,
   "explanation": "A full 3d subshell plus a half-full 4s gives extra stability, so one 4s electron is promoted."
  },
  {
   "id": "orbitals-x03",
   "topic": "orbitals",
   "q": "Which ion has the electron configuration [Ar] 3d³?",
   "options": [
    "Fe²⁺",
    "Mn²⁺",
    "Ti⁴⁺",
    "V²⁺"
   ],
   "answer": 3,
   "explanation": "Vanadium is [Ar] 3d³ 4s²; losing the two 4s electrons gives V²⁺ with [Ar] 3d³. Fe²⁺ is 3d⁶, Mn²⁺ is 3d⁵ and Ti⁴⁺ is 3d⁰."
  },
  {
   "id": "shapes-w01",
   "topic": "shapes",
   "type": "written",
   "marks": 3,
   "q": "Use electron pair repulsion theory to predict the shape of each of the following and state the approximate bond angle.\n(a) NH₃ (b) BF₃ (c) SF₆",
   "points": [
    {
     "t": "(a) NH₃: 4 electron pairs (3 bonding, 1 lone pair): trigonal pyramidal, about 107°",
     "m": 1
    },
    {
     "t": "(b) BF₃: 3 bonding pairs, no lone pairs: trigonal planar, 120°",
     "m": 1
    },
    {
     "t": "(c) SF₆: 6 bonding pairs, no lone pairs: octahedral, 90°",
     "m": 1
    }
   ],
   "model": "(a) Nitrogen has four electron pairs, one of them a lone pair, giving a trigonal pyramidal shape; the lone pair repels the bonding pairs and reduces the angle to about 107°. (b) Boron has three bonding pairs, so the shape is trigonal planar with 120° angles. (c) Sulfur has six bonding pairs, giving an octahedral shape with 90° angles."
  },
  {
   "id": "shapes-w02",
   "topic": "shapes",
   "type": "written",
   "marks": 3,
   "q": "The bond angle in methane (109.5°) is greater than the bond angle in water (104.5°). Explain this difference.",
   "points": [
    {
     "t": "Both have four electron pairs arranged tetrahedrally",
     "m": 1
    },
    {
     "t": "Water has two lone pairs; methane has none",
     "m": 1
    },
    {
     "t": "Lone pairs repel bonding pairs more strongly than bonding pairs repel each other, so the angle is smaller in water",
     "m": 1
    }
   ],
   "model": "Both molecules have four electron pairs around the central atom, arranged in a tetrahedron. In methane they are all bonding pairs, giving 109.5°. Water has two lone pairs, and lone pair–bonding pair repulsion is stronger than bonding pair–bonding pair repulsion, which squeezes the H–O–H angle to 104.5°."
  },
  {
   "id": "shapes-w03",
   "topic": "shapes",
   "type": "written",
   "marks": 4,
   "q": "Chlorine trifluoride, ClF₃, is a T-shaped molecule.\n(a) State the number of bonding pairs and lone pairs of electrons on the chlorine atom. (1)\n(b) Name the arrangement of the five electron pairs. (1)\n(c) Explain why the molecule is T-shaped rather than trigonal planar. (2)",
   "points": [
    {
     "t": "(a) 3 bonding pairs and 2 lone pairs",
     "m": 1
    },
    {
     "t": "(b) Trigonal bipyramidal",
     "m": 1
    },
    {
     "t": "(c) The lone pairs occupy the equatorial positions (where they have the least repulsion with other pairs)",
     "m": 1
    },
    {
     "t": "This leaves the three fluorine atoms in a T shape",
     "m": 1
    }
   ],
   "model": "(a) Chlorine has seven outer electrons; three form bonds and the other four form two lone pairs. (b) Five electron pairs adopt a trigonal bipyramidal arrangement. (c) To minimise repulsion the two lone pairs go in the equatorial positions, 120° apart from each other, leaving the three bonded fluorines in a T-shaped arrangement (one axial pair and one equatorial)."
  },
  {
   "id": "shapes-w04",
   "topic": "shapes",
   "type": "written",
   "marks": 3,
   "q": "Xenon tetrafluoride, XeF₄, is a square planar molecule. Explain, in terms of electron pairs, why it has this shape.",
   "points": [
    {
     "t": "Xenon has 8 outer electrons: 4 form bonding pairs and 4 remain as 2 lone pairs",
     "m": 1
    },
    {
     "t": "The six electron pairs are arranged octahedrally",
     "m": 1
    },
    {
     "t": "The two lone pairs are on opposite sides (furthest apart), leaving the four fluorines in a square plane",
     "m": 1
    }
   ],
   "model": "Xenon has eight outer electrons; four are used in bonds with fluorine, leaving two lone pairs. The six electron pairs arrange themselves octahedrally. The two lone pairs sit opposite each other to minimise repulsion, so the four F atoms lie in one plane at 90° angles: square planar."
  },
  {
   "id": "shapes-w05",
   "topic": "shapes",
   "type": "written",
   "marks": 3,
   "q": "State the shape of ICl₄⁻ and SF₄ and explain why they are different from the shape of CCl₄.",
   "points": [
    {
     "t": "ICl₄⁻ is square planar and SF₄ is see-saw, whereas CCl₄ is tetrahedral",
     "m": 1
    },
    {
     "t": "CCl₄ has four bonding pairs and no lone pairs",
     "m": 1
    },
    {
     "t": "ICl₄⁻ and SF₄ have lone pairs on the central atom (two and one respectively), which change the shape",
     "m": 1
    }
   ],
   "model": "CCl₄ has four bonding pairs and no lone pairs, so it is tetrahedral. ICl₄⁻ has four bonding pairs and two lone pairs (six electron pairs, octahedral arrangement) giving a square planar shape. SF₄ has four bonding pairs and one lone pair (five electron pairs, trigonal bipyramidal arrangement) giving a see-saw shape."
  },
  {
   "id": "shapes-x01",
   "topic": "shapes",
   "q": "What is the shape of a molecule with three bonding pairs and one lone pair around the central atom?",
   "options": [
    "Trigonal planar",
    "Tetrahedral",
    "Bent",
    "Trigonal pyramidal"
   ],
   "answer": 3,
   "explanation": "Four electron pairs are arranged tetrahedrally; with one lone pair the three atoms form a pyramid."
  },
  {
   "id": "shapes-x02",
   "topic": "shapes",
   "q": "Which of the following molecules is linear?",
   "options": [
    "H₂O",
    "XeF₂",
    "SF₄",
    "BF₃"
   ],
   "answer": 1,
   "explanation": "XeF₂ has five electron pairs: two bonding and three lone pairs. The lone pairs sit equatorially so the F–Xe–F axis is linear."
  },
  {
   "id": "shapes-x03",
   "topic": "shapes",
   "q": "What is the bond angle in an octahedral molecule such as SF₆?",
   "options": [
    "109.5°",
    "120°",
    "180°",
    "90°"
   ],
   "answer": 3,
   "explanation": "All F–S–F angles between adjacent fluorines in an octahedral molecule are 90°."
  },
  {
   "id": "tm-w01",
   "topic": "tm",
   "type": "written",
   "marks": 4,
   "q": "A solution of a complex ion absorbs light most strongly at a wavelength of 600 nm.\n(a) Calculate the energy, in kJ mol⁻¹, of the light absorbed. (2)\n(b) Describe what this energy corresponds to in the complex ion. (1)\n(c) Why does a solution of a zinc(II) complex appear colourless? (1)\n(h = 6.63 × 10⁻³⁴ J s; c = 3.00 × 10⁸ m s⁻¹; L = 6.02 × 10²³ mol⁻¹)",
   "points": [
    {
     "t": "(a) E = L h c ÷ λ = 6.02 × 10²³ × 6.63 × 10⁻³⁴ × 3.00 × 10⁸ ÷ 600 × 10⁻⁹",
     "m": 1
    },
    {
     "t": "= 2e+05 J mol⁻¹ = 200 kJ mol⁻¹",
     "m": 1
    },
    {
     "t": "(b) The energy gap between the split d orbitals (an electron is promoted from a lower to a higher d orbital)",
     "m": 1
    },
    {
     "t": "(c) Zn²⁺ has a full 3d subshell (3d¹⁰), so no d–d electron transitions are possible and no visible light is absorbed",
     "m": 1
    }
   ],
   "model": "(a) E = L h ν = L h c ÷ λ = 6.02 × 10²³ × 6.63 × 10⁻³⁴ × 3.00 × 10⁸ ÷ 6.00 × 10⁻⁷ = 2e+05 J mol⁻¹ = 200 kJ mol⁻¹. (b) The light absorbed promotes an electron between the two sets of d orbitals that were split in energy by the ligands, so it equals the energy gap ΔE. (c) Zinc(II) has a full 3d¹⁰ subshell, so no electron can be promoted within the d orbitals, no light in the visible region is absorbed and the complex is colourless."
  },
  {
   "id": "tm-w02",
   "topic": "tm",
   "type": "written",
   "marks": 3,
   "q": "Explain why aqueous solutions of copper(II) sulfate are blue.",
   "points": [
    {
     "t": "Ligands (water) split the 3d orbitals into two sets of different energy",
     "m": 1
    },
    {
     "t": "Light is absorbed (red/orange) when an electron is promoted to a higher d orbital (d–d transition)",
     "m": 1
    },
    {
     "t": "The remaining (complementary) colour, blue, is transmitted",
     "m": 1
    }
   ],
   "model": "In the hydrated copper(II) ion the water ligands split the d orbitals into two energy levels. Red–orange light has just the right energy to promote an electron to the upper level and is absorbed; the unabsorbed light, which looks blue, is transmitted."
  },
  {
   "id": "tm-w03",
   "topic": "tm",
   "type": "written",
   "marks": 3,
   "q": "The complex ion [Co(NH₃)₆]³⁺ is formed when ammonia is added to a solution of cobalt(III) ions.\n(a) State the oxidation state of cobalt in the complex. (1)\n(b) State the coordination number of the cobalt ion. (1)\n(c) Explain why ammonia can act as a ligand. (1)",
   "points": [
    {
     "t": "(a) The oxidation state of cobalt is +3",
     "m": 1
    },
    {
     "t": "(b) The coordination number is 6",
     "m": 1
    },
    {
     "t": "(c) Ammonia has a lone pair of electrons on the nitrogen atom which forms a dative covalent bond with the metal ion",
     "m": 1
    }
   ],
   "model": "(a) Ammonia is neutral, so the oxidation state of cobalt equals the charge on the complex: +3. (b) Six ammonia ligands are bonded to the cobalt, so the coordination number is 6. (c) Each ammonia molecule uses the lone pair of electrons on nitrogen to form a dative covalent bond to the cobalt ion."
  },
  {
   "id": "tm-w04",
   "topic": "tm",
   "type": "written",
   "marks": 5,
   "q": "The iron(II) content of a solution is found by titration with potassium permanganate.\nMnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺\n25.0 cm³ of the iron(II) solution required 18.6 cm³ of potassium permanganate solution, concentration 0.0200 mol l⁻¹.\n(a) State the colour change at the end point. (1)\n(b) Calculate the concentration of iron(II) ions in the solution. (4)",
   "points": [
    {
     "t": "(a) Colourless (very pale) to pale pink (permanganate acts as its own indicator)",
     "m": 1
    },
    {
     "t": "(b) Moles of MnO₄⁻ = 0.0200 × 0.0186 = 3.720e-04 mol",
     "m": 1
    },
    {
     "t": "Mole ratio MnO₄⁻ : Fe²⁺ = 1 : 5",
     "m": 1
    },
    {
     "t": "Moles of Fe²⁺ = 5 × 3.720e-04 = 1.860e-03 mol",
     "m": 1
    },
    {
     "t": "Concentration = 1.860e-03 ÷ 0.0250 = 0.074 mol l⁻¹",
     "m": 1
    }
   ],
   "model": "(a) The end point is the first permanent faint pink colour, since the purple permanganate is decolourised by the iron(II) until it is in slight excess. (b) n(MnO₄⁻) = c × V = 0.0200 × 0.0186 = 3.720e-04 mol. The equation shows 5 Fe²⁺ react with each MnO₄⁻, so n(Fe²⁺) = 5 × 3.720e-04 = 1.860e-03 mol in 25.0 cm³. c = n ÷ V = 1.860e-03 ÷ 0.0250 = 0.074 mol l⁻¹."
  },
  {
   "id": "tm-w05",
   "topic": "tm",
   "type": "written",
   "marks": 3,
   "q": "Transition metals and their compounds are often good catalysts. Explain, with reference to variable oxidation states, how iron(III) ions can catalyse the reaction between iodide ions and peroxodisulfate ions.",
   "points": [
    {
     "t": "Iron(III) is reduced to iron(II) by iodide ions (iodide is oxidised to iodine)",
     "m": 1
    },
    {
     "t": "Iron(II) is oxidised back to iron(III) by peroxodisulfate ions",
     "m": 1
    },
    {
     "t": "The catalyst is regenerated; the variable oxidation states provide an alternative lower activation energy pathway",
     "m": 1
    }
   ],
   "model": "Fe³⁺ oxidises I⁻ to I₂ and is reduced to Fe²⁺. The Fe²⁺ is then oxidised back to Fe³⁺ by S₂O₈²⁻. Because iron can easily change between the +2 and +3 oxidation states it provides an alternative pathway with a lower activation energy and is regenerated at the end."
  },
  {
   "id": "tm-w06",
   "topic": "tm",
   "type": "written",
   "marks": 3,
   "q": "State the oxidation state of vanadium in each of these species and explain why they can be interconverted.\nVO₂⁺ VO²⁺ V³⁺ V²⁺",
   "points": [
    {
     "t": "VO₂⁺: +5, VO²⁺: +4",
     "m": 1
    },
    {
     "t": "V³⁺: +3, V²⁺: +2",
     "m": 1
    },
    {
     "t": "Transition metals have several oxidation states because the 3d and 4s electrons are similar in energy, so different numbers of electrons can be lost; the changes are redox reactions",
     "m": 1
    }
   ],
   "model": "In VO₂⁺ the oxidation state is +5 (2 × O is −4; 5 − 4 = +1), in VO²⁺ it is +4, in V³⁺ +3 and in V²⁺ +2. Vanadium can form these because the 3d and 4s electrons have similar energies and various numbers of them can be lost. Moving between species involves gaining or losing electrons – redox reactions."
  },
  {
   "id": "tm-x01",
   "topic": "tm",
   "q": "What is the coordination number of the complex ion [Cu(NH₃)₄(H₂O)₂]²⁺?",
   "options": [
    "2",
    "6",
    "4",
    "2+"
   ],
   "answer": 1,
   "explanation": "Coordination number is the total number of dative bonds from ligands: 4 + 2 = 6."
  },
  {
   "id": "tm-x02",
   "topic": "tm",
   "q": "Why is a solution of Zn²⁺ ions colourless?",
   "options": [
    "Zn²⁺ ions do not absorb any radiation",
    "Zn²⁺ ions have no electrons",
    "Zinc is not a transition metal ion with ligands",
    "The 3d subshell is full so no d–d transitions can occur"
   ],
   "answer": 3,
   "explanation": "Colour in transition metal complexes arises from d–d transitions; Zn²⁺ has a full 3d¹⁰ subshell so there is no vacancy for an electron to be promoted into."
  },
  {
   "id": "tm-x03",
   "topic": "tm",
   "q": "Which of the following is a bidentate ligand?",
   "options": [
    "Water",
    "Ethane-1,2-diamine",
    "Ammonia",
    "Chloride ion"
   ],
   "answer": 1,
   "explanation": "A bidentate ligand uses two atoms to form two dative bonds; ethane-1,2-diamine has two nitrogen atoms with lone pairs."
  },
  {
   "id": "tm-x04",
   "topic": "tm",
   "q": "Which statement about heterogeneous catalysis is correct?",
   "options": [
    "The catalyst is in the same phase as the reactants",
    "The catalyst is used up during the reaction",
    "The catalyst changes the position of equilibrium",
    "The catalyst is in a different phase from the reactants"
   ],
   "answer": 3,
   "explanation": "In heterogeneous catalysis the catalyst (often a solid) is in a different phase from the reactants, such as iron in the Haber process."
  },
  {
   "id": "equil-w01",
   "topic": "equil",
   "type": "written",
   "marks": 5,
   "q": "Ammonia is made by the Haber process.\nN₂(g) + 3H₂(g) ⇌ 2NH₃(g)\nAt equilibrium at 700 K the concentrations are: N₂ 0.30 mol l⁻¹, H₂ 0.60 mol l⁻¹, NH₃ 0.12 mol l⁻¹.\n(a) Write the expression for the equilibrium constant, Kc. (1)\n(b) Calculate the value of Kc and state its units. (3)\n(c) The forward reaction is exothermic. State the effect on Kc of increasing the temperature. (1)",
   "points": [
    {
     "t": "(a) Kc = [NH₃]² ÷ ([N₂][H₂]³)",
     "m": 1
    },
    {
     "t": "(b) Kc = (0.12)² ÷ (0.30 × 0.60³)",
     "m": 1
    },
    {
     "t": "Kc = 0.222",
     "m": 1
    },
    {
     "t": "Units: l² mol⁻²",
     "m": 1
    },
    {
     "t": "(c) Kc decreases (the equilibrium shifts to the left, the endothermic direction)",
     "m": 1
    }
   ],
   "model": "(a) Kc = [NH₃]² ÷ ([N₂][H₂]³). (b) Kc = 0.12² ÷ (0.30 × 0.60³) = 0.0144 ÷ 0.0648 = 0.222. The units are (mol l⁻¹)² ÷ (mol l⁻¹)⁴ = l² mol⁻². (c) For an exothermic reaction, raising the temperature favours the reverse (endothermic) direction, so the equilibrium moves to the left and Kc falls."
  },
  {
   "id": "equil-w02",
   "topic": "equil",
   "type": "written",
   "marks": 5,
   "q": "1.00 mol of hydrogen and 1.00 mol of iodine are placed in a 2.00 l container and allowed to reach equilibrium at 700 K.\nH₂(g) + I₂(g) ⇌ 2HI(g)\nAt equilibrium the mixture contains 1.56 mol of hydrogen iodide.\n(a) Calculate the number of moles of hydrogen and iodine at equilibrium. (2)\n(b) Calculate the equilibrium concentrations of all three substances. (1)\n(c) Calculate Kc. (2)",
   "points": [
    {
     "t": "(a) Moles of H₂ used = 1.56 ÷ 2 = 0.78 mol",
     "m": 1
    },
    {
     "t": "Moles of H₂ = I₂ at equilibrium = 1.00 − 0.78 = 0.22 mol",
     "m": 1
    },
    {
     "t": "(b) [H₂] = [I₂] = 0.22 ÷ 2.00 = 0.110 mol l⁻¹; [HI] = 1.56 ÷ 2.00 = 0.78 mol l⁻¹",
     "m": 1
    },
    {
     "t": "(c) Kc = [HI]² ÷ ([H₂][I₂]) = 0.78² ÷ (0.110 × 0.110)",
     "m": 1
    },
    {
     "t": "Kc = 50.3 (no units)",
     "m": 1
    }
   ],
   "model": "(a) The 1 : 1 : 2 ratio means that forming 1.56 mol of HI uses 0.78 mol each of H₂ and I₂, so 0.22 mol of each remains. (b) Divide by the volume (2.00 l): [H₂] = [I₂] = 0.110 mol l⁻¹ and [HI] = 0.780 mol l⁻¹. (c) Kc = 0.780² ÷ (0.110 × 0.110) = 50.3. The units cancel, so Kc has no units."
  },
  {
   "id": "equil-w03",
   "topic": "equil",
   "type": "written",
   "marks": 3,
   "q": "State and explain the effect on the value of Kc, and on the position of equilibrium, of (a) adding a catalyst and (b) increasing the pressure, for the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g).",
   "points": [
    {
     "t": "(a) Catalyst: no change in Kc or the position; both forward and reverse rates increase equally (equilibrium reached faster)",
     "m": 1
    },
    {
     "t": "(b) Higher pressure: Kc is unchanged (it depends only on temperature)",
     "m": 1
    },
    {
     "t": "The position shifts to the right (fewer moles of gas) to reduce the pressure",
     "m": 1
    }
   ],
   "model": "(a) A catalyst speeds up the forward and reverse reactions equally; it changes neither Kc nor the equilibrium position, only the time taken to reach equilibrium. (b) Kc depends only on temperature, so it is unchanged by pressure. The equilibrium position shifts to the right, the side with fewer gas molecules (2 against 4), partially counteracting the pressure increase."
  },
  {
   "id": "equil-x01",
   "topic": "equil",
   "q": "For which change does the value of Kc change?",
   "options": [
    "Adding a catalyst",
    "Increasing the pressure",
    "Increasing the concentration of a reactant",
    "A change in temperature"
   ],
   "answer": 3,
   "explanation": "Kc depends only on temperature (for a given reaction)."
  },
  {
   "id": "equil-x02",
   "topic": "equil",
   "q": "What are the units of Kc for the equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)?",
   "options": [
    "mol l⁻¹",
    "l mol⁻¹",
    "l² mol⁻²",
    "There are no units"
   ],
   "answer": 1,
   "explanation": "Kc = [SO₃]² ÷ ([SO₂]²[O₂]) has units (mol l⁻¹)² ÷ (mol l⁻¹)³ = l mol⁻¹."
  },
  {
   "id": "feasible-w01",
   "topic": "feasible",
   "type": "written",
   "marks": 5,
   "q": "Ammonia is made from nitrogen and hydrogen.\nN₂(g) + 3H₂(g) → 2NH₃(g)   ΔH° = −92.4 kJ mol⁻¹\nStandard entropies, S°/J K⁻¹ mol⁻¹: N₂ 191.6; H₂ 130.6; NH₃ 192.5\n(a) Calculate ΔS° for the reaction. (2)\n(b) Calculate ΔG° at 298 K, in kJ mol⁻¹. (2)\n(c) Calculate the temperature above which the reaction is no longer feasible. (1)",
   "points": [
    {
     "t": "(a) ΔS° = ΣS°(products) − ΣS°(reactants) = (2 × 192.5) − (191.6 + 3 × 130.6)",
     "m": 1
    },
    {
     "t": "= -198.4 J K⁻¹ mol⁻¹",
     "m": 1
    },
    {
     "t": "(b) ΔG° = ΔH° − TΔS° = −92.4 − (298 × -0.1984)",
     "m": 1
    },
    {
     "t": "= -33.3 kJ mol⁻¹",
     "m": 1
    },
    {
     "t": "(c) T = ΔH° ÷ ΔS° = −92.4 ÷ -0.1984 = 466 K",
     "m": 1
    }
   ],
   "model": "(a) ΔS° = (2 × 192.5) − (191.6 + 3 × 130.6) = 385.0 − 583.4 = -198.4 J K⁻¹ mol⁻¹ (entropy decreases because four moles of gas become two). (b) ΔS° = -0.1984 kJ K⁻¹ mol⁻¹, so ΔG° = −92.4 − 298 × (-0.1984) = -33.3 kJ mol⁻¹: feasible at 298 K. (c) The reaction stops being feasible when ΔG° = 0: T = ΔH° ÷ ΔS° = 466 K.",
   "explanation": "Remember to convert ΔS° from J K⁻¹ mol⁻¹ to kJ K⁻¹ mol⁻¹ before combining with ΔH° in kJ."
  },
  {
   "id": "feasible-w02",
   "topic": "feasible",
   "type": "written",
   "marks": 5,
   "q": "Calcium carbonate decomposes on heating.\nCaCO₃(s) → CaO(s) + CO₂(g)\nStandard enthalpies of formation, ΔHf°/kJ mol⁻¹: CaCO₃ −1207; CaO −635; CO₂ −394\nStandard entropies, S°/J K⁻¹ mol⁻¹: CaCO₃ 92.9; CaO 39.8; CO₂ 213.8\n(a) Calculate ΔH° for the decomposition. (1)\n(b) Calculate ΔS° for the decomposition. (1)\n(c) Calculate the minimum temperature at which the decomposition becomes feasible. (2)\n(d) Explain why ΔS° is positive. (1)",
   "points": [
    {
     "t": "(a) ΔH° = (−635 − 394) − (−1207) = +178 kJ mol⁻¹",
     "m": 1
    },
    {
     "t": "(b) ΔS° = (39.8 + 213.8) − 92.9 = +160.7 J K⁻¹ mol⁻¹",
     "m": 1
    },
    {
     "t": "(c) Feasible when ΔG° < 0: T > ΔH° ÷ ΔS° = 178 ÷ 0.1607",
     "m": 1
    },
    {
     "t": "= 1108 K",
     "m": 1
    },
    {
     "t": "(d) A gas is produced from a solid, so there is a large increase in disorder (dispersal of energy)",
     "m": 1
    }
   ],
   "model": "(a) ΔH° = ΣΔHf°(products) − ΣΔHf°(reactants) = (−635 − 394) − (−1207) = +178 kJ mol⁻¹. (b) ΔS° = (39.8 + 213.8) − 92.9 = 160.7 J K⁻¹ mol⁻¹. (c) ΔG° = ΔH° − TΔS° < 0 when T > ΔH° ÷ ΔS° = 178 ÷ 0.1607 = 1108 K. (d) The reaction produces a gas from a solid, so the products are much more disordered than the reactant."
  },
  {
   "id": "feasible-w03",
   "topic": "feasible",
   "type": "written",
   "marks": 4,
   "q": "The graph shows how ΔG° varies with temperature for a reaction.\n(a) Use the graph to state the value of ΔH° for the reaction. (1)\n(b) Calculate the value of ΔS° in kJ K⁻¹ mol⁻¹. (2)\n(c) At what temperature does the reaction become feasible? (1)",
   "points": [
    {
     "t": "(a) ΔH° = +90 kJ mol⁻¹ (the value of ΔG° at T = 0 K, where TΔS° = 0)",
     "m": 1
    },
    {
     "t": "(b) The slope of the line equals −ΔS°: slope = (−90 − 90) ÷ 1000 = −0.18",
     "m": 1
    },
    {
     "t": "ΔS° = +0.18 kJ K⁻¹ mol⁻¹",
     "m": 1
    },
    {
     "t": "(c) 500 K (where the line crosses ΔG° = 0)",
     "m": 1
    }
   ],
   "model": "(a) At T = 0 K the term TΔS° is zero, so ΔG° = ΔH° = +90 kJ mol⁻¹. (b) ΔG° = ΔH° − TΔS°, so the gradient of the line is −ΔS°. Between 0 and 1000 K, ΔG° falls from +90 to −90 kJ mol⁻¹: gradient = −180 ÷ 1000 = −0.18 kJ K⁻¹ mol⁻¹, so ΔS° = +0.18 kJ K⁻¹ mol⁻¹. (c) The reaction is feasible when ΔG° is negative, which occurs above the temperature where the line crosses zero, 500 K (check: 90 ÷ 0.18 = 500).",
   "figure": {
    "src": "img/ah-dg-t.svg",
    "alt": "Straight line graph of standard Gibbs free energy change in kilojoules per mole against temperature in kelvin from 0 to 1000. The line slopes downward from a positive value at 0 K and crosses the zero line part-way across.",
    "caption": "ΔG° against temperature"
   }
  },
  {
   "id": "feasible-w04",
   "topic": "feasible",
   "type": "written",
   "marks": 4,
   "q": "For a reaction, ΔG° = −12.0 kJ mol⁻¹ at 298 K.\n(a) Calculate the equilibrium constant, K, for the reaction at this temperature. (3)\n(b) State what the value of K indicates about the position of equilibrium. (1)\n(R = 8.31 J K⁻¹ mol⁻¹)",
   "points": [
    {
     "t": "(a) ΔG° = −RT ln K, so ln K = 12000 ÷ (8.31 × 298)",
     "m": 1
    },
    {
     "t": "ln K = 4.85",
     "m": 1
    },
    {
     "t": "Equilibrium constant K = 127",
     "m": 1
    },
    {
     "t": "(b) K is greater than 1, so the position of equilibrium lies to the right (favours products)",
     "m": 1
    }
   ],
   "model": "(a) ΔG° = −RT ln K, so ln K = −ΔG° ÷ RT = 12000 ÷ (8.31 × 298) = 4.85, and K = e^4.85 = 127. (b) K is much greater than 1, so at equilibrium the mixture contains mostly products.",
   "explanation": "Convert ΔG° to J mol⁻¹ when using R = 8.31 J K⁻¹ mol⁻¹."
  },
  {
   "id": "feasible-w05",
   "topic": "feasible",
   "type": "written",
   "marks": 2,
   "q": "Explain why the entropy of a system increases when ice melts to form water.",
   "points": [
    {
     "t": "The particles in the solid are held in a regular, fixed arrangement; in the liquid they are free to move",
     "m": 1
    },
    {
     "t": "This means the liquid has more disorder (more ways of arranging the particles/energy), so entropy increases",
     "m": 1
    }
   ],
   "model": "In ice the water molecules are fixed in a regular lattice, whereas in liquid water they can move around and are arranged more randomly. The greater disorder means a higher entropy."
  },
  {
   "id": "feasible-x01",
   "topic": "feasible",
   "q": "Under which conditions is a reaction feasible at all temperatures?",
   "options": [
    "ΔH is positive and ΔS is negative",
    "ΔH is negative and ΔS is positive",
    "ΔH is negative and ΔS is negative",
    "ΔH is positive and ΔS is positive"
   ],
   "answer": 1,
   "explanation": "If ΔH < 0 and ΔS > 0 then ΔG = ΔH − TΔS is negative at every temperature."
  },
  {
   "id": "feasible-x02",
   "topic": "feasible",
   "q": "What is the relationship between ΔG° and the equilibrium constant K?",
   "options": [
    "ΔG° = RT ln K",
    "ΔG° = −R ln K ÷ T",
    "ΔG° = ΔH° ln K",
    "ΔG° = −RT ln K"
   ],
   "answer": 3,
   "explanation": "A negative ΔG° corresponds to K > 1, which requires the minus sign."
  },
  {
   "id": "feasible-x03",
   "topic": "feasible",
   "q": "Which change would lead to a decrease in entropy?",
   "options": [
    "Dissolving salt in water",
    "Condensation of steam to water",
    "Boiling ethanol",
    "Thermal decomposition of calcium carbonate to produce CO₂"
   ],
   "answer": 1,
   "explanation": "Gas to liquid reduces disorder, so entropy decreases. The others increase disorder."
  },
  {
   "id": "kinetics-w01",
   "topic": "kinetics",
   "type": "written",
   "marks": 5,
   "q": "The initial rate of the reaction A + B → products was measured in three experiments.\nExperiment 1: [A] 0.10 mol l⁻¹, [B] 0.10 mol l⁻¹, rate 2.0 × 10⁻³ mol l⁻¹ s⁻¹\nExperiment 2: [A] 0.20 mol l⁻¹, [B] 0.10 mol l⁻¹, rate 4.0 × 10⁻³ mol l⁻¹ s⁻¹\nExperiment 3: [A] 0.10 mol l⁻¹, [B] 0.20 mol l⁻¹, rate 8.0 × 10⁻³ mol l⁻¹ s⁻¹\n(a) Deduce the order of reaction with respect to A and to B. (2)\n(b) Write the rate equation. (1)\n(c) Calculate the rate constant, k, with units. (2)",
   "points": [
    {
     "t": "(a) A: doubling [A] doubles the rate (experiments 1 and 2), so first order",
     "m": 1
    },
    {
     "t": "B: doubling [B] quadruples the rate (experiments 1 and 3), so second order",
     "m": 1
    },
    {
     "t": "(b) rate = k[A][B]²",
     "m": 1
    },
    {
     "t": "(c) k = rate ÷ ([A][B]²) = 2.0 × 10⁻³ ÷ (0.10 × 0.10²) = 2.0",
     "m": 1
    },
    {
     "t": "Units: l² mol⁻² s⁻¹",
     "m": 1
    }
   ],
   "model": "(a) Experiment 2 doubles [A] and the rate doubles, so the reaction is first order in A. Experiment 3 doubles [B] and the rate increases four times, so it is second order in B. (b) rate = k[A][B]². (c) Using experiment 1, k = 2.0 × 10⁻³ ÷ (0.10 × 0.10²) = 2.0. Units: (mol l⁻¹ s⁻¹) ÷ (mol l⁻¹)³ = l² mol⁻² s⁻¹.",
   "explanation": "Compare two experiments in which only one concentration changes."
  },
  {
   "id": "kinetics-w02",
   "topic": "kinetics",
   "type": "written",
   "marks": 3,
   "q": "A reaction A + 2B → P has the following mechanism.\nStep 1 (slow): A + B → X\nStep 2 (fast): X + B → P\n(a) Write the rate equation consistent with this mechanism. (1)\n(b) State the order of reaction with respect to B and the overall order. (1)\n(c) Explain why the stoichiometry of the overall equation does not determine the rate equation. (1)",
   "points": [
    {
     "t": "(a) rate = k[A][B]",
     "m": 1
    },
    {
     "t": "(b) First order in B; overall second order",
     "m": 1
    },
    {
     "t": "(c) The rate depends only on the species involved in the slow (rate-determining) step, not on the overall equation",
     "m": 1
    }
   ],
   "model": "(a) The rate-determining step is the slow step, which involves one A and one B, so rate = k[A][B]. (b) B is first order; the overall order is 2. (c) The overall equation shows 2B reacting, but only one B takes part in the slow step, so the orders cannot be read from the overall equation: they have to be found experimentally."
  },
  {
   "id": "kinetics-w03",
   "topic": "kinetics",
   "type": "written",
   "marks": 4,
   "q": "The graph shows how the initial rate varies with the concentration of the reactant for three reactions P, Q and R.\n(a) State the order of reaction with respect to the reactant for each of P, Q and R. (3)\n(b) The concentration of the reactant is doubled in each reaction. State the effect on the rate for the reaction with the highest order. (1)",
   "points": [
    {
     "t": "(a) P: zero order (the rate is independent of concentration — a horizontal line)",
     "m": 1
    },
    {
     "t": "Q: first order (rate directly proportional to concentration — a straight line through the origin)",
     "m": 1
    },
    {
     "t": "R: second order (the rate increases as the square of the concentration — a curve through the origin)",
     "m": 1
    },
    {
     "t": "(b) For R, doubling the concentration makes the rate four times as great",
     "m": 1
    }
   ],
   "model": "(a) P is a horizontal line, so the rate does not depend on concentration: zero order. Q is a straight line through the origin, so rate ∝ [reactant]: first order. R is a curve through the origin that steepens, so rate ∝ [reactant]²: second order. (b) The highest order is second (R), so doubling the concentration increases the rate by a factor of 2² = 4.",
   "figure": {
    "src": "img/ah-rate-conc.svg",
    "alt": "Graph of initial rate in moles per litre per second against concentration of reactant, showing three lines: a horizontal line P, a straight sloping line Q from the origin, and an upward curving line R from the origin.",
    "caption": "Initial rate against concentration"
   }
  },
  {
   "id": "kinetics-w04",
   "topic": "kinetics",
   "type": "written",
   "marks": 2,
   "q": "The rate constant k for a reaction increases when the temperature is increased. Explain why.",
   "points": [
    {
     "t": "At a higher temperature a greater proportion of molecules have energy equal to or greater than the activation energy",
     "m": 1
    },
    {
     "t": "So the frequency of successful collisions increases, which is reflected in a larger k",
     "m": 1
    }
   ],
   "model": "Raising the temperature increases the kinetic energy of the molecules, so a greater proportion exceed the activation energy. More collisions are successful each second, so the rate at given concentrations is greater and k is larger."
  },
  {
   "id": "kinetics-x01",
   "topic": "kinetics",
   "q": "What are the units of the rate constant for a reaction that is second order overall?",
   "options": [
    "s⁻¹",
    "mol l⁻¹ s⁻¹",
    "l² mol⁻² s⁻¹",
    "l mol⁻¹ s⁻¹"
   ],
   "answer": 3,
   "explanation": "For second order, rate = k[X]² so k = rate ÷ conc² has units mol l⁻¹ s⁻¹ ÷ (mol l⁻¹)² = l mol⁻¹ s⁻¹."
  },
  {
   "id": "kinetics-x02",
   "topic": "kinetics",
   "q": "A reaction is first order in A. If [A] is tripled with all else constant, the rate",
   "options": [
    "increases by a factor of 9",
    "increases by a factor of 3",
    "does not change",
    "increases by a factor of 6"
   ],
   "answer": 1,
   "explanation": "For a first-order reaction the rate is directly proportional to the concentration."
  },
  {
   "id": "kinetics-x03",
   "topic": "kinetics",
   "q": "Which step in a mechanism determines the overall rate equation?",
   "options": [
    "The first step",
    "The fastest step",
    "The final step",
    "The slowest step"
   ],
   "answer": 3,
   "explanation": "The slowest (rate-determining) step controls how quickly the overall reaction can proceed."
  },
  {
   "id": "structure-w01",
   "topic": "structure",
   "type": "written",
   "marks": 3,
   "q": "2,3-Dibromopentane, CH₃CHBrCHBrCH₂CH₃, contains two stereogenic (chiral) centres.\n(a) What is meant by a chiral centre? (1)\n(b) Identify the chiral carbon atoms by number. (1)\n(c) What is the maximum number of stereoisomers possible? (1)",
   "points": [
    {
     "t": "(a) A carbon atom bonded to four different atoms or groups",
     "m": 1
    },
    {
     "t": "(b) Carbons 2 and 3",
     "m": 1
    },
    {
     "t": "(c) 4 stereoisomers (2² = 4: two pairs of enantiomers)",
     "m": 1
    }
   ],
   "model": "(a) A chiral centre is a carbon bonded to four different groups. (b) Carbon 2 (H, Br, CH₃, CHBrC₂H₅) and carbon 3 (H, Br, C₂H₅, CHBrCH₃) are each attached to four different groups. (c) With two chiral centres there are 2² = 4 stereoisomers."
  },
  {
   "id": "structure-w02",
   "topic": "structure",
   "type": "written",
   "marks": 3,
   "q": "Explain what is meant by optical isomers (enantiomers) and describe how they differ in their physical properties and in their effect on plane-polarised light.",
   "points": [
    {
     "t": "Enantiomers are non-superimposable mirror images of each other",
     "m": 1
    },
    {
     "t": "They have identical physical properties (melting point, density, etc.)",
     "m": 1
    },
    {
     "t": "They rotate the plane of polarised light by equal amounts in opposite directions",
     "m": 1
    }
   ],
   "model": "Enantiomers are mirror-image molecules that cannot be superimposed, arising from a chiral centre. Their physical properties are the same, but one rotates the plane of plane-polarised light clockwise and the other rotates it by the same angle anticlockwise."
  },
  {
   "id": "structure-w03",
   "topic": "structure",
   "type": "written",
   "marks": 3,
   "q": "But-2-ene exists as two geometric isomers.\n(a) Draw the structural formula of each isomer and name them. (2)\n(b) State the structural requirement for geometric isomerism about a C=C bond. (1)",
   "points": [
    {
     "t": "(a) cis-but-2-ene (Z): both CH₃ groups on the same side of the double bond",
     "m": 1
    },
    {
     "t": "trans-but-2-ene (E): the CH₃ groups on opposite sides of the double bond",
     "m": 1
    },
    {
     "t": "(b) Each carbon of the double bond must have two different groups attached, and rotation about C=C is restricted",
     "m": 1
    }
   ],
   "model": "(a) In the cis (Z) isomer the two methyl groups are on the same side of the C=C bond; in the trans (E) isomer they are on opposite sides. (b) Each carbon atom of the double bond must carry two different groups, and rotation about the double bond is not possible."
  },
  {
   "id": "structure-w04",
   "topic": "structure",
   "type": "written",
   "marks": 2,
   "q": "Benzene is planar and all carbon–carbon bonds have the same length (0.140 nm), which is between the lengths of C–C and C=C. Explain this observation in terms of the bonding in benzene.",
   "points": [
    {
     "t": "Each carbon uses its p electron to form a delocalised π system above and below the ring",
     "m": 1
    },
    {
     "t": "The six π electrons are shared equally between all six carbons, so all bonds are equivalent and of intermediate length",
     "m": 1
    }
   ],
   "model": "Each carbon contributes one p electron to a ring of delocalised π electrons above and below the plane. The electrons are shared equally around the ring, so there are no separate single and double bonds and all the bond lengths are equal."
  },
  {
   "id": "structure-w05",
   "topic": "structure",
   "type": "written",
   "marks": 2,
   "q": "Benzene is more stable than hypothetical cyclohexa-1,3,5-triene. Using enthalpy data, the enthalpy of hydrogenation of benzene is −208 kJ mol⁻¹ and that of cyclohexene is −120 kJ mol⁻¹. Calculate the delocalisation (stabilisation) energy of benzene.",
   "points": [
    {
     "t": "Expected for three isolated C=C bonds: 3 × (−120) = −360 kJ mol⁻¹",
     "m": 1
    },
    {
     "t": "Delocalisation energy = −208 − (−360) = 152 kJ mol⁻¹ (benzene is more stable by 152 kJ mol⁻¹)",
     "m": 1
    }
   ],
   "model": "If benzene had three localised double bonds, hydrogenation would release 3 × 120 = 360 kJ mol⁻¹. It releases only 208 kJ mol⁻¹, so benzene is more stable by 152 kJ mol⁻¹, the delocalisation energy."
  },
  {
   "id": "structure-x01",
   "topic": "structure",
   "q": "Which type of isomerism is shown by CH₃CH(OH)COOH (lactic acid)?",
   "options": [
    "Geometric isomerism only",
    "Optical isomerism",
    "Positional isomerism only",
    "No isomerism"
   ],
   "answer": 1,
   "explanation": "The central carbon is attached to H, OH, CH₃ and COOH, four different groups, so it is chiral and has enantiomers."
  },
  {
   "id": "structure-x02",
   "topic": "structure",
   "q": "What is a racemic mixture?",
   "options": [
    "A mixture of cis and trans isomers",
    "A mixture of two structural isomers",
    "A pure single enantiomer",
    "An equimolar mixture of two enantiomers"
   ],
   "answer": 3,
   "explanation": "The two enantiomers rotate plane-polarised light in opposite directions equally, so a 50:50 mixture shows no net rotation."
  },
  {
   "id": "structure-x03",
   "topic": "structure",
   "q": "Which compound exhibits E/Z (geometric) isomerism?",
   "options": [
    "CH₃CH₂CH=CH₂",
    "CH₃CH=CHCH₃",
    "(CH₃)₂C=CH₂",
    "CH₂=CH₂"
   ],
   "answer": 1,
   "explanation": "Only but-2-ene has two different groups on each carbon of the double bond, so cis/trans isomers exist."
  },
  {
   "id": "structure-x04",
   "topic": "structure",
   "q": "How many σ bonds and π bonds are there in a molecule of ethene, CH₂=CH₂?",
   "options": [
    "4 σ and 2 π",
    "6 σ and 0 π",
    "3 σ and 3 π",
    "5 σ and 1 π"
   ],
   "answer": 3,
   "explanation": "Four C–H bonds and one C–C σ bond make five σ bonds; the second bond of the double bond is the single π bond."
  },
  {
   "id": "structure-x05",
   "topic": "structure",
   "q": "Which of the following molecules is planar?",
   "options": [
    "Cyclohexane",
    "Benzene",
    "Methane",
    "2-methylbutane"
   ],
   "answer": 1,
   "explanation": "All six carbon atoms in benzene are sp² hybridised and lie in one plane; cyclohexane is puckered."
  },
  {
   "id": "structure-x06",
   "topic": "structure",
   "q": "What is the shape around each carbon atom in a benzene ring?",
   "options": [
    "Tetrahedral",
    "Linear",
    "Octahedral",
    "Trigonal planar"
   ],
   "answer": 3,
   "explanation": "Each carbon forms three σ bonds in the plane at 120°, with the remaining p electron in the delocalised π cloud."
  },
  {
   "id": "mechanisms-w01",
   "topic": "mechanisms",
   "type": "written",
   "marks": 4,
   "q": "Propene reacts with hydrogen bromide to give mainly 2-bromopropane.\n(a) Name the mechanism. (1)\n(b) Describe the mechanism, including the formation of the intermediate. (2)\n(c) Explain why 2-bromopropane is the major product rather than 1-bromopropane. (1)",
   "points": [
    {
     "t": "(a) Electrophilic addition",
     "m": 1
    },
    {
     "t": "(b) The polarised H–Br molecule is attacked by the π electrons of C=C; H⁺ adds to one carbon to form a carbocation",
     "m": 1
    },
    {
     "t": "Bromide ion then attacks the carbocation to form the product",
     "m": 1
    },
    {
     "t": "(c) The secondary carbocation is more stable than the primary one, because alkyl groups donate electrons (positive inductive effect)",
     "m": 1
    }
   ],
   "model": "(a) The alkene's π electrons attack the electrophile, so it is electrophilic addition. (b) The π bond attacks the δ+ hydrogen of HBr, forming a carbocation and Br⁻; the bromide ion then bonds to the carbocation. (c) The secondary carbocation (CH₃–C⁺H–CH₃) is stabilised by two electron-donating alkyl groups, so it forms in preference to the primary carbocation, giving 2-bromopropane."
  },
  {
   "id": "mechanisms-w02",
   "topic": "mechanisms",
   "type": "written",
   "marks": 4,
   "q": "Benzene reacts with a mixture of concentrated nitric and concentrated sulfuric acids at about 50 °C.\n(a) Write an equation for the formation of the electrophile. (1)\n(b) Name the mechanism. (1)\n(c) Describe how the electrophile reacts with benzene and how the aromatic ring is restored. (2)",
   "points": [
    {
     "t": "(a) HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻ (or HNO₃ + H₂SO₄ → NO₂⁺ + H₂O + HSO₄⁻)",
     "m": 1
    },
    {
     "t": "(b) Electrophilic substitution",
     "m": 1
    },
    {
     "t": "(c) The NO₂⁺ is attacked by the delocalised π electrons of the ring, forming a positively charged intermediate",
     "m": 1
    },
    {
     "t": "A hydrogen ion is lost, restoring the stable delocalised ring and forming nitrobenzene",
     "m": 1
    }
   ],
   "model": "(a) Sulfuric acid protonates nitric acid, which loses water to give the nitronium ion, NO₂⁺. (b) The mechanism is electrophilic substitution. (c) The π electrons attack NO₂⁺ to form a carbocation intermediate; a proton is then lost, which returns the aromatic ring and gives nitrobenzene."
  },
  {
   "id": "mechanisms-w03",
   "topic": "mechanisms",
   "type": "written",
   "marks": 3,
   "q": "2-bromo-2-methylpropane reacts with aqueous sodium hydroxide by an SN1 mechanism.\n(a) Describe the two steps in the mechanism. (2)\n(b) Explain why the tertiary halogenoalkane reacts by SN1 rather than SN2. (1)",
   "points": [
    {
     "t": "(a) Slow step: C–Br bond breaks heterolytically to form a tertiary carbocation and a bromide ion",
     "m": 1
    },
    {
     "t": "Fast step: hydroxide ion (nucleophile) attacks the carbocation to form 2-methylpropan-2-ol",
     "m": 1
    },
    {
     "t": "(b) The tertiary carbocation is stabilised by three alkyl groups, and the bulky groups hinder backside attack required by SN2",
     "m": 1
    }
   ],
   "model": "(a) The C–Br bond breaks to give a tertiary carbocation (rate-determining step), which is then attacked by OH⁻. (b) The tertiary carbocation is relatively stable and the three methyl groups hinder approach of the nucleophile in an SN2 attack, so SN1 is preferred."
  },
  {
   "id": "mechanisms-w04",
   "topic": "mechanisms",
   "type": "written",
   "marks": 3,
   "q": "Bromoethane reacts with hydroxide ions in a one-step SN2 reaction.\n(a) Describe how the nucleophile attacks. (1)\n(b) Describe the transition state. (1)\n(c) What would happen to the configuration at a chiral carbon in an SN2 reaction? (1)",
   "points": [
    {
     "t": "(a) The OH⁻ ion approaches the carbon atom from the side opposite the bromine atom (backside attack)",
     "m": 1
    },
    {
     "t": "(b) Five groups around carbon: the carbon is partly bonded to both OH and Br",
     "m": 1
    },
    {
     "t": "(c) Inversion of configuration (a single enantiomer produces the opposite enantiomer)",
     "m": 1
    }
   ],
   "model": "(a) The nucleophile attacks from the side opposite the leaving group. (b) In the transition state the carbon is partly bonded to both the incoming OH and outgoing Br. (c) The three other groups flip like an umbrella, giving inversion of configuration."
  },
  {
   "id": "mechanisms-w05",
   "topic": "mechanisms",
   "type": "written",
   "marks": 3,
   "q": "A pure sample of (R)-2-bromobutane is hydrolysed. In experiment 1 the product is optically active. In experiment 2 the product is a racemic mixture.\nWhich experiment is likely to involve an SN1 mechanism? Explain your choice.",
   "points": [
    {
     "t": "Experiment 2",
     "m": 1
    },
    {
     "t": "An SN1 mechanism involves a planar carbocation intermediate",
     "m": 1
    },
    {
     "t": "The nucleophile can attack from either face equally, giving both enantiomers (racemic mixture); SN2 gives inversion and an optically active product",
     "m": 1
    }
   ],
   "model": "Experiment 2 corresponds to SN1. The carbocation formed is planar so hydroxide can attack from either side with equal probability, giving equal amounts of both enantiomers. An SN2 reaction gives complete inversion and an optically active product."
  },
  {
   "id": "mechanisms-w06",
   "topic": "mechanisms",
   "type": "written",
   "marks": 3,
   "q": "Suggest a three-step route to convert bromoethane into propylamine (propan-1-amine). Give the reagents for each step and name the intermediates.",
   "points": [
    {
     "t": "Step 1: bromoethane + KCN (ethanol/water, heat) → propanenitrile",
     "m": 1
    },
    {
     "t": "Step 2: reduce the nitrile using LiAlH₄ in dry ether (then dilute acid work-up) or H₂/Ni",
     "m": 1
    },
    {
     "t": "This gives propylamine (the carbon chain was extended by one carbon by the cyanide step)",
     "m": 1
    }
   ],
   "model": "Cyanide displaces bromide to give propanenitrile (CH₃CH₂CN), which extends the chain by one carbon. Reduction of the nitrile with lithium aluminium hydride gives propan-1-amine, CH₃CH₂CH₂NH₂."
  },
  {
   "id": "mechanisms-w07",
   "topic": "mechanisms",
   "type": "written",
   "marks": 2,
   "q": "Ethanoyl chloride reacts vigorously with ethanol at room temperature. Name the organic product and the type of reaction.",
   "points": [
    {
     "t": "Ethyl ethanoate",
     "m": 1
    },
    {
     "t": "Nucleophilic substitution / condensation (acylation, with loss of HCl)",
     "m": 1
    }
   ],
   "model": "The alcohol acts as a nucleophile and displaces chloride from the acyl chloride, giving ethyl ethanoate and hydrogen chloride. This is an acylation (esterification)."
  },
  {
   "id": "mechanisms-x01",
   "topic": "mechanisms",
   "q": "Which reagent is used to reduce a ketone to a secondary alcohol?",
   "options": [
    "Acidified potassium dichromate",
    "Concentrated sulfuric acid",
    "Sodium hydroxide solution",
    "LiAlH₄ in dry ether"
   ],
   "answer": 3,
   "explanation": "Lithium aluminium hydride is a strong reducing agent that reduces ketones to secondary alcohols and aldehydes to primary alcohols."
  },
  {
   "id": "mechanisms-x02",
   "topic": "mechanisms",
   "q": "Which species is the electrophile in the bromination of benzene catalysed by FeBr₃?",
   "options": [
    "Br⁻",
    "Br⁺ (polarised Br–Br–FeBr₃)",
    "FeBr₄⁻",
    "Br₂ molecule with no polarity"
   ],
   "answer": 1,
   "explanation": "The iron(III) bromide polarises bromine to generate a strongly electrophilic Br⁺ species that attacks the ring."
  },
  {
   "id": "mechanisms-x03",
   "topic": "mechanisms",
   "q": "What type of reaction is the conversion of 2-bromopropane into propene using ethanolic potassium hydroxide?",
   "options": [
    "Addition",
    "Substitution",
    "Condensation",
    "Elimination"
   ],
   "answer": 3,
   "explanation": "Hot ethanolic KOH removes HBr from the halogenoalkane, forming a C=C bond."
  },
  {
   "id": "mechanisms-x04",
   "topic": "mechanisms",
   "q": "Why is a tertiary halogenoalkane unlikely to react by SN2?",
   "options": [
    "There are no hydrogen atoms",
    "The bulky alkyl groups hinder attack by the nucleophile",
    "The C–Br bond is non-polar",
    "A tertiary carbocation is unstable"
   ],
   "answer": 1,
   "explanation": "Three alkyl groups around the carbon block the backside approach of the nucleophile."
  },
  {
   "id": "mechanisms-x05",
   "topic": "mechanisms",
   "q": "In which step of the SN1 mechanism is the rate determined?",
   "options": [
    "Attack of the nucleophile on the halogenoalkane",
    "Formation of a bond between two radicals",
    "Loss of a proton from the product",
    "Heterolytic cleavage of the C–X bond to form a carbocation"
   ],
   "answer": 3,
   "explanation": "The slow step is formation of the carbocation, so the rate depends only on the concentration of the halogenoalkane."
  },
  {
   "id": "mechanisms-x06",
   "topic": "mechanisms",
   "q": "What is the product when CH₃CH₂CH=CH₂ reacts with HBr according to Markovnikov's rule?",
   "options": [
    "1-bromobutane",
    "2-bromobutane",
    "1,2-dibromobutane",
    "Butane"
   ],
   "answer": 1,
   "explanation": "Hydrogen adds to the carbon with more hydrogens, giving the more stable secondary carbocation and hence 2-bromobutane."
  },
  {
   "id": "mechanisms-x07",
   "topic": "mechanisms",
   "q": "Which of the following nucleophiles is neutral (has no overall charge)?",
   "options": [
    "OH⁻",
    "CN⁻",
    "Br⁻",
    "NH₃"
   ],
   "answer": 3,
   "explanation": "Ammonia has a lone pair on nitrogen and acts as a neutral nucleophile; the others are anions."
  },
  {
   "id": "mechanisms-x08",
   "topic": "mechanisms",
   "q": "What is formed when ammonia (in excess) reacts with bromoethane?",
   "options": [
    "Ethanol",
    "Ethylamine",
    "Ethanenitrile",
    "Ethene"
   ],
   "answer": 1,
   "explanation": "Ammonia acts as a nucleophile and displaces bromide, forming ethylamine, CH₃CH₂NH₂."
  },
  {
   "id": "colour-w01",
   "topic": "colour",
   "type": "written",
   "marks": 3,
   "q": "Many organic dyes contain extended conjugated systems.\n(a) What is meant by a chromophore? (1)\n(b) Explain why extending the conjugated system shifts the absorption to longer wavelengths. (2)",
   "points": [
    {
     "t": "(a) The part of a molecule responsible for absorbing visible light (delocalised electron system)",
     "m": 1
    },
    {
     "t": "(b) A larger conjugated system has a smaller energy gap between the π orbitals (HOMO–LUMO gap)",
     "m": 1
    },
    {
     "t": "ΔE = hf, so a smaller ΔE means lower frequency and longer wavelength is absorbed",
     "m": 1
    }
   ],
   "model": "(a) A chromophore is the group of atoms, usually with delocalised electrons, that absorbs visible light. (b) As conjugation extends, the energy gap between occupied and unoccupied π orbitals narrows. Light of lower energy (longer wavelength) is then absorbed (ΔE = hf)."
  },
  {
   "id": "colour-w02",
   "topic": "colour",
   "type": "written",
   "marks": 4,
   "q": "The graph shows the visible absorption spectrum of a coloured solution.\n(a) At what wavelength is the absorption greatest? (1)\n(b) Which colour of light is absorbed most strongly? (1)\n(c) What colour does the solution appear? Explain. (1)\n(d) Which colour of filter should be used in a colorimeter to measure its concentration? (1)",
   "points": [
    {
     "t": "(a) 600 nm",
     "m": 1
    },
    {
     "t": "(b) Orange light",
     "m": 1
    },
    {
     "t": "(c) Blue (the complementary colour of orange): the colours not absorbed are transmitted",
     "m": 1
    },
    {
     "t": "(d) An orange filter, as this is the colour absorbed most strongly",
     "m": 1
    }
   ],
   "model": "(a) The maximum is at 600 nm. (b) Light of 600 nm is orange. (c) The solution absorbs orange and transmits the remainder, so it appears blue (the complementary colour). (d) An orange filter allows only the light which the solution absorbs most strongly to pass, giving the greatest sensitivity.",
   "figure": {
    "src": "img/ah-visible-spectrum.svg",
    "alt": "Graph of absorbance against wavelength from 400 to 700 nanometres for a coloured solution, showing a single smooth absorption peak in the visible region and low absorbance either side of it.",
    "caption": "Visible absorption spectrum of a coloured solution"
   }
  },
  {
   "id": "colour-w03",
   "topic": "colour",
   "type": "written",
   "marks": 2,
   "q": "Explain why transition-metal complexes are usually coloured but zinc(II) complexes are colourless.",
   "points": [
    {
     "t": "In transition-metal complexes the d orbitals are split, and electrons absorb visible light to move between them (d–d transition)",
     "m": 1
    },
    {
     "t": "Zn²⁺ has a full 3d subshell (d¹⁰) so there are no vacant d orbitals for electron promotion",
     "m": 1
    }
   ],
   "model": "Ligands split the d orbitals into two sets; absorption of visible light promotes a d electron to the higher set. Zn²⁺ has a full d¹⁰ configuration so no such transition is possible and it is colourless."
  },
  {
   "id": "colour-x01",
   "topic": "colour",
   "q": "A compound absorbs light of wavelength 450 nm (blue). What colour does it appear?",
   "options": [
    "Blue",
    "Yellow/orange",
    "Green",
    "Violet"
   ],
   "answer": 1,
   "explanation": "A solution appears in the colour complementary to the colour it absorbs; absorption of blue gives orange/yellow."
  },
  {
   "id": "colour-x02",
   "topic": "colour",
   "q": "Which change in structure is most likely to shift absorption of an organic molecule from the UV into the visible region?",
   "options": [
    "Replacing C=C with C–C",
    "Making the molecule saturated",
    "Reducing the number of π electrons",
    "Increasing the extent of conjugation"
   ],
   "answer": 3,
   "explanation": "A longer conjugated system lowers the energy gap so lower energy (longer wavelength) light is absorbed."
  },
  {
   "id": "colour-x03",
   "topic": "colour",
   "q": "What is a pH indicator such as methyl orange?",
   "options": [
    "A strong acid",
    "A weak acid whose two forms are different colours",
    "A reducing agent",
    "An insoluble salt"
   ],
   "answer": 1,
   "explanation": "The un-ionised and ionised forms of the indicator have different conjugated structures and therefore different colours."
  },
  {
   "id": "spectro-w01",
   "topic": "spectro",
   "type": "written",
   "marks": 4,
   "q": "The mass spectrum of a compound with the formula C₄H₈O is shown.\n(a) What is the relative formula mass of the compound? (1)\n(b) Identify the fragment responsible for the peak at m/z 43. (1)\n(c) The IR spectrum shows a strong sharp absorption at 1715 cm⁻¹ and no broad absorption above 3000 cm⁻¹. Suggest a structure for the compound. (2)",
   "points": [
    {
     "t": "(a) 72 (the molecular ion peak)",
     "m": 1
    },
    {
     "t": "(b) CH₃CO⁺ (an acylium ion, mass 43)",
     "m": 1
    },
    {
     "t": "(c) The 1715 cm⁻¹ peak shows a C=O group; no O–H, so it is not an alcohol or acid",
     "m": 1
    },
    {
     "t": "Butanone, CH₃COCH₂CH₃ (fragments at 43 (CH₃CO⁺), 57 (CH₃CH₂CO⁺) and 29 (CH₃CH₂⁺) fit)",
     "m": 1
    }
   ],
   "model": "(a) The molecular ion peak at m/z 72 gives the formula mass. (b) m/z 43 corresponds to CH₃CO⁺ (15 + 28). (c) A strong absorption near 1715 cm⁻¹ shows C=O, and no broad O–H band excludes an alcohol or acid; butanone (a ketone) fits, since it can fragment to CH₃CO⁺ (43), C₂H₅CO⁺ (57) and C₂H₅⁺ (29).",
   "figure": {
    "src": "img/ah-ms-ketone.svg",
    "alt": "Mass spectrum showing relative abundance in percent against m/z from 0 to 85, with four labelled peaks of different heights and the tallest labelled at one of the lower m/z values.",
    "caption": "Mass spectrum of a C₄H₈O compound"
   }
  },
  {
   "id": "spectro-w02",
   "topic": "spectro",
   "type": "written",
   "marks": 4,
   "q": "The high-resolution ¹H NMR spectrum of a compound with formula C₄H₈O₂ shows three signals: a triplet (3 H), a singlet (3 H) and a quartet (2 H).\n(a) Explain what the quartet tells you about the neighbouring protons. (1)\n(b) Identify the groups giving the singlet and the quartet. (2)\n(c) Name the compound. (1)",
   "points": [
    {
     "t": "(a) The quartet shows that there are three protons on the adjacent carbon (n + 1 rule)",
     "m": 1
    },
    {
     "t": "(b) Singlet: CH₃ group with no adjacent H, next to C=O (CH₃CO–)",
     "m": 1
    },
    {
     "t": "Quartet: CH₂ attached to O and next to a CH₃ group (–OCH₂CH₃)",
     "m": 1
    },
    {
     "t": "(c) Ethyl ethanoate",
     "m": 1
    }
   ],
   "model": "(a) The n + 1 rule: a quartet means the CH₂ has three neighbouring protons. (b) The singlet (3 H) is a methyl group with no neighbouring H, in CH₃C=O; the quartet (2 H) is –OCH₂– next to a CH₃ (the triplet). (c) The compound is CH₃COOCH₂CH₃, ethyl ethanoate.",
   "figure": {
    "src": "img/ah-nmr-ester.svg",
    "alt": "High-resolution proton NMR spectrum with chemical shift from 5 to 0 parts per million, showing three groups of peaks, one split into four lines, one a single line and one split into three lines, each labelled with a relative area.",
    "caption": "¹H NMR spectrum of a C₄H₈O₂ compound"
   }
  },
  {
   "id": "spectro-w03",
   "topic": "spectro",
   "type": "written",
   "marks": 3,
   "q": "The IR spectrum of a compound with the formula C₃H₆O₂ is shown.\n(a) What do the features of the spectrum suggest about the functional group? (2)\n(b) Name the compound. (1)",
   "points": [
    {
     "t": "(a) A very broad absorption in the 2500–3300 cm⁻¹ region is the O–H of a carboxylic acid",
     "m": 1
    },
    {
     "t": "The strong sharp absorption near 1710 cm⁻¹ is the C=O group",
     "m": 1
    },
    {
     "t": "(b) Propanoic acid",
     "m": 1
    }
   ],
   "model": "(a) The very broad absorption between about 2500 and 3300 cm⁻¹ is typical of the O–H stretch in a carboxylic acid, and the strong band near 1710 cm⁻¹ is C=O, so the compound is a carboxylic acid. (b) With three carbons the compound is propanoic acid, CH₃CH₂COOH.",
   "figure": {
    "src": "img/ah-ir-acid.svg",
    "alt": "Infrared spectrum showing transmittance in percent against wavenumber from 4000 to 500 per centimetre, with one very wide absorption in the higher wavenumber region and several narrower absorptions at lower wavenumbers.",
    "caption": "Infrared spectrum of a C₃H₆O₂ compound"
   }
  },
  {
   "id": "spectro-w04",
   "topic": "spectro",
   "type": "written",
   "marks": 3,
   "q": "The infrared spectrum shown belongs to an organic compound containing only carbon, hydrogen and oxygen.\n(a) Identify the functional group responsible for the strong, sharp absorption near 1715 cm⁻¹. (1)\n(b) Explain why the compound is not an alcohol or a carboxylic acid. (1)\n(c) Suggest two possible compound classes. (1)",
   "points": [
    {
     "t": "(a) The carbonyl group, C=O",
     "m": 1
    },
    {
     "t": "(b) There is no broad O–H absorption between 2500 and 3600 cm⁻¹",
     "m": 1
    },
    {
     "t": "(c) An aldehyde or a ketone (ester also possible without the C–O stretch)",
     "m": 1
    }
   ],
   "model": "(a) A strong absorption at about 1715 cm⁻¹ is the C=O stretch. (b) Alcohols and acids both show a broad O–H absorption at higher wavenumber, which is absent here. (c) The compound could be an aldehyde or a ketone.",
   "figure": {
    "src": "img/ah-ir-ketone.svg",
    "alt": "Infrared spectrum showing transmittance in percent against wavenumber from 4000 to 500 per centimetre, with a group of absorptions near 3000 per centimetre, a single very strong sharp absorption at lower wavenumber, and several weaker absorptions below it.",
    "caption": "Infrared spectrum of an organic compound"
   }
  },
  {
   "id": "spectro-w05",
   "topic": "spectro",
   "type": "written",
   "marks": 3,
   "q": "The molecular ion of a bromoalkane shows two peaks of almost equal height at m/z 108 and 110.\n(a) Explain why there are two peaks. (1)\n(b) Deduce the formula of the compound. (2)",
   "points": [
    {
     "t": "(a) Bromine has two isotopes (⁷⁹Br and ⁸¹Br) in about equal abundance",
     "m": 1
    },
    {
     "t": "(b) 108 − 79 = 29, which is C₂H₅",
     "m": 1
    },
    {
     "t": "The compound is bromoethane, C₂H₅Br",
     "m": 1
    }
   ],
   "model": "(a) The natural isotopes ⁷⁹Br and ⁸¹Br occur in a ratio of about 1:1, giving M and M+2 peaks of similar height. (b) m/z 108 corresponds to ⁷⁹Br plus a fragment of mass 29 (C₂H₅), so the compound is bromoethane."
  },
  {
   "id": "spectro-w06",
   "topic": "spectro",
   "type": "written",
   "marks": 3,
   "q": "The following data are obtained for the colorimetric determination of a copper(II) complex: the absorbance of a solution is 0.33, and the calibration graph shows absorbance against concentration.\n(a) Use the graph to find the concentration of the solution. (1)\n(b) The solution was prepared by diluting 5.0 cm³ of a stock solution to 50.0 cm³. Calculate the concentration of the stock solution. (2)",
   "points": [
    {
     "t": "(a) 0.60 mmol l⁻¹ (absorbance 0.33 on the graph)",
     "m": 1
    },
    {
     "t": "(b) Dilution factor = 50.0 ÷ 5.0 = 10",
     "m": 1
    },
    {
     "t": "Stock concentration = 0.60 × 10 = 6.0 mmol l⁻¹",
     "m": 1
    }
   ],
   "model": "(a) Reading across from an absorbance of 0.33 to the line and down gives 0.60 mmol l⁻¹. (b) The solution was diluted ten-fold, so the stock is ten times as concentrated: 0.60 × 10 = 6.0 mmol l⁻¹.",
   "figure": {
    "src": "img/ah-calibration.svg",
    "alt": "Calibration graph of absorbance against concentration in millimoles per litre for a copper complex, showing six data points lying on a straight line through the origin.",
    "caption": "Calibration graph for a copper(II) complex"
   }
  },
  {
   "id": "spectro-w07",
   "topic": "spectro",
   "type": "written",
   "marks": 2,
   "q": "The molar absorption coefficient is calculated from A = ε c l. A solution of concentration 2.2 × 10⁻⁴ mol l⁻¹ in a cell of path length 1.00 cm has absorbance 0.462. Calculate ε and state its units.",
   "points": [
    {
     "t": "ε = A ÷ (c × l) = 0.462 ÷ (2.2 × 10⁻⁴ × 1.00) = 2100",
     "m": 1
    },
    {
     "t": "Units: l mol⁻¹ cm⁻¹",
     "m": 1
    }
   ],
   "model": "Rearranging A = ε c l gives ε = A ÷ (c l) = 0.462 ÷ (2.2 × 10⁻⁴ × 1.00) = 2100 l mol⁻¹ cm⁻¹."
  },
  {
   "id": "spectro-x01",
   "topic": "spectro",
   "q": "In ¹H NMR, which signal would appear as a doublet?",
   "options": [
    "The CH₃ in CH₃Cl",
    "The six protons of the two CH₃ groups in CH₃CH(Cl)CH₃",
    "The CH₃ in CH₃CH₂Cl",
    "The CH₂ in CH₃CH₂Cl"
   ],
   "answer": 1,
   "explanation": "A methyl group next to a carbon bearing one hydrogen is split into n + 1 = 2 lines, a doublet."
  },
  {
   "id": "spectro-x02",
   "topic": "spectro",
   "q": "What does the base peak in a mass spectrum represent?",
   "options": [
    "The molecular ion",
    "The heaviest ion",
    "The fragment with the highest charge",
    "The most abundant ion"
   ],
   "answer": 3,
   "explanation": "The base peak is the tallest peak, assigned 100 % relative abundance."
  },
  {
   "id": "spectro-x03",
   "topic": "spectro",
   "q": "How many different proton environments are there in ethyl ethanoate, CH₃COOCH₂CH₃?",
   "options": [
    "2",
    "3",
    "4",
    "5"
   ],
   "answer": 1,
   "explanation": "The three environments are CH₃C=O, OCH₂ and the CH₃ of the ethyl group."
  },
  {
   "id": "spectro-x04",
   "topic": "spectro",
   "q": "Which absorption in an infrared spectrum would indicate a nitrile (C≡N) group?",
   "options": [
    "About 1700 cm⁻¹",
    "About 3300 cm⁻¹ (broad)",
    "About 1000 cm⁻¹ only",
    "About 2200–2260 cm⁻¹"
   ],
   "answer": 3,
   "explanation": "The C≡N stretch absorbs in the 2200–2260 cm⁻¹ region, free from many other absorptions."
  },
  {
   "id": "spectro-x05",
   "topic": "spectro",
   "q": "Why is tetramethylsilane (TMS) used as a reference in NMR?",
   "options": [
    "It dissolves all samples",
    "Its 12 equivalent protons give a single sharp signal at δ = 0",
    "It gives many signals",
    "It absorbs infrared radiation"
   ],
   "answer": 1,
   "explanation": "TMS gives one strong signal that is well away from the typical range of other protons, so is a convenient zero."
  },
  {
   "id": "spectro-x06",
   "topic": "spectro",
   "q": "The integration trace of an NMR spectrum shows a ratio 3 : 2 : 1. What does this represent?",
   "options": [
    "The distance between peaks",
    "The mass of each fragment",
    "The relative abundance of isotopes",
    "The relative numbers of protons in each environment"
   ],
   "answer": 3,
   "explanation": "The area under each signal is proportional to the number of hydrogens in that environment."
  },
  {
   "id": "spectro-x07",
   "topic": "spectro",
   "q": "Which wavelength region is used by a colorimeter?",
   "options": [
    "Microwave",
    "Visible",
    "Ultraviolet only",
    "X-ray"
   ],
   "answer": 1,
   "explanation": "Colorimeters measure absorption of visible light by coloured solutions."
  },
  {
   "id": "spectro-x08",
   "topic": "spectro",
   "q": "A solution has an absorbance of 0.40 at a concentration of 0.20 mmol l⁻¹. What absorbance is expected at 0.50 mmol l⁻¹ under the same conditions?",
   "options": [
    "0.80",
    "0.50",
    "1.6",
    "1.0"
   ],
   "answer": 3,
   "explanation": "Absorbance is proportional to concentration (Beer–Lambert): 0.40 × 0.50 ÷ 0.20 = 1.0."
  },
  {
   "id": "medicines-w01",
   "topic": "medicines",
   "type": "written",
   "marks": 3,
   "q": "A drug works by binding to a receptor on a cell.\n(a) What is meant by an agonist? (1)\n(b) What is meant by an antagonist? (1)\n(c) Give one type of interaction by which a drug may bind to a receptor. (1)",
   "points": [
    {
     "t": "(a) An agonist binds to a receptor and activates it (producing a response)",
     "m": 1
    },
    {
     "t": "(b) An antagonist binds to a receptor but does not activate it, blocking the natural agonist",
     "m": 1
    },
    {
     "t": "(c) Hydrogen bonding, ionic interactions or van der Waals forces",
     "m": 1
    }
   ],
   "model": "An agonist mimics the natural messenger and triggers the receptor. An antagonist binds but produces no response and prevents the agonist from binding. Binding is by intermolecular interactions such as hydrogen bonds, ionic attractions or van der Waals forces."
  },
  {
   "id": "medicines-w02",
   "topic": "medicines",
   "type": "written",
   "marks": 3,
   "q": "Enzyme inhibitors are often used as drugs.\n(a) Explain how a competitive inhibitor reduces the rate of an enzyme-catalysed reaction. (2)\n(b) Why can increasing the concentration of the substrate overcome competitive inhibition? (1)",
   "points": [
    {
     "t": "(a) The inhibitor has a shape similar to the substrate and binds to the active site",
     "m": 1
    },
    {
     "t": "The substrate is blocked, so fewer enzyme–substrate complexes form and the reaction is slower",
     "m": 1
    },
    {
     "t": "(b) The substrate competes more effectively for the active sites",
     "m": 1
    }
   ],
   "model": "(a) The inhibitor resembles the substrate and occupies the active site, preventing the substrate from binding. (b) A higher substrate concentration increases the chance that the substrate rather than the inhibitor binds, restoring the rate."
  },
  {
   "id": "medicines-w03",
   "topic": "medicines",
   "type": "written",
   "marks": 2,
   "q": "Explain what is meant by the pharmacophore of a drug molecule and why the other parts of the molecule may still be important.",
   "points": [
    {
     "t": "The pharmacophore is the part of the molecule (the arrangement of functional groups) responsible for the biological activity / binding to the receptor",
     "m": 1
    },
    {
     "t": "The rest of the molecule affects properties such as solubility, absorption and how well the pharmacophore is held in the correct orientation",
     "m": 1
    }
   ],
   "model": "The pharmacophore is the specific arrangement of functional groups that interacts with the receptor. The remainder of the molecule influences solubility, transport and the position of the pharmacophore."
  },
  {
   "id": "medicines-x01",
   "topic": "medicines",
   "q": "What is the effect of an antagonist at a receptor?",
   "options": [
    "It activates the receptor strongly",
    "It destroys the receptor",
    "It speeds up the natural agonist",
    "It binds without activating the receptor and blocks the agonist"
   ],
   "answer": 3,
   "explanation": "Antagonists occupy the binding site but do not produce a response, preventing the natural agonist from acting."
  },
  {
   "id": "medicines-x02",
   "topic": "medicines",
   "q": "Which factor is most important in the ability of a drug to bind to a receptor?",
   "options": [
    "The colour of the drug",
    "The shape and functional groups matching the binding site",
    "The boiling point of the drug",
    "The number of carbon atoms"
   ],
   "answer": 1,
   "explanation": "A drug must fit the binding site and form intermolecular interactions with its groups."
  },
  {
   "id": "medicines-x03",
   "topic": "medicines",
   "q": "Why might a drug molecule be converted into a salt, such as a hydrochloride?",
   "options": [
    "To decrease its melting point",
    "To make it volatile",
    "To make it chiral",
    "To increase its solubility in water"
   ],
   "answer": 3,
   "explanation": "Ionic salts of amines or acids are generally more soluble in water, which helps administration and absorption."
  },
  {
   "id": "stoich-w01",
   "topic": "stoich",
   "type": "written",
   "marks": 4,
   "q": "A 0.500 g antacid tablet containing calcium carbonate was added to 50.0 cm³ of 0.200 mol l⁻¹ hydrochloric acid. The excess acid required 24.0 cm³ of 0.100 mol l⁻¹ sodium hydroxide for neutralisation.\n(a) Calculate the moles of hydrochloric acid added. (1)\n(b) Calculate the moles of acid in excess. (1)\n(c) Calculate the percentage of calcium carbonate (GFM = 100) in the tablet. (2)",
   "points": [
    {
     "t": "(a) 0.200 × 0.0500 = 0.0100 mol",
     "m": 1
    },
    {
     "t": "(b) Excess HCl = moles NaOH = 0.100 × 0.0240 = 0.00240 mol",
     "m": 1
    },
    {
     "t": "(c) HCl reacted = 0.0100 − 0.00240 = 0.00760 mol; CaCO₃ + 2HCl, so CaCO₃ = 0.00380 mol",
     "m": 1
    },
    {
     "t": "Mass = 0.00380 × 100 = 0.380 g; % = 0.380 ÷ 0.500 × 100 = 76 %",
     "m": 1
    }
   ],
   "model": "(a) n(HCl) = 0.200 × 0.0500 = 0.0100 mol. (b) NaOH neutralises the excess: n = 0.100 × 0.0240 = 0.00240 mol. (c) HCl used by the tablet = 0.00760 mol; the equation CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ gives 0.00380 mol CaCO₃ = 0.380 g, which is 76 % of the tablet."
  },
  {
   "id": "stoich-w02",
   "topic": "stoich",
   "type": "written",
   "marks": 4,
   "q": "A 0.500 g sample of brass was dissolved and made up to 100.0 cm³. A 20.0 cm³ portion was treated with excess iodide: 2Cu²⁺ + 4I⁻ → 2CuI + I₂. The iodine liberated required 18.0 cm³ of 0.0500 mol l⁻¹ sodium thiosulfate: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻.\nCalculate the percentage of copper (63.5) in the brass.",
   "points": [
    {
     "t": "n(S₂O₃²⁻) = 0.0500 × 0.0180 = 9.00 × 10⁻⁴ mol",
     "m": 1
    },
    {
     "t": "Ratio Cu²⁺ : I₂ : S₂O₃²⁻ = 2 : 1 : 2, so n(Cu²⁺) = 9.00 × 10⁻⁴ mol in 20.0 cm³",
     "m": 1
    },
    {
     "t": "In 100.0 cm³: 4.50 × 10⁻³ mol, mass = 4.50 × 10⁻³ × 63.5 = 0.286 g",
     "m": 1
    },
    {
     "t": "% Cu = 0.286 ÷ 0.500 × 100 = 57.1 %",
     "m": 1
    }
   ],
   "model": "Moles of thiosulfate = 9.00 × 10⁻⁴ mol. Each mole of iodine releases 2 mol of thiosulfate and arises from 2 mol of Cu²⁺, so n(Cu²⁺) = n(S₂O₃²⁻) = 9.00 × 10⁻⁴ mol in the 20.0 cm³ portion. The whole sample contains 5 × this = 4.50 × 10⁻³ mol = 0.286 g, so the brass is 57.1 % copper."
  },
  {
   "id": "stoich-w03",
   "topic": "stoich",
   "type": "written",
   "marks": 3,
   "q": "20.0 cm³ of a solution of chloride ions was treated with excess silver nitrate solution and the silver chloride precipitate was filtered, dried and weighed. The mass was 0.287 g (GFM AgCl = 143.5).\nCalculate the concentration of chloride ions in the original solution.",
   "points": [
    {
     "t": "Moles of AgCl = 0.287 ÷ 143.5 = 2.00 × 10⁻³ mol",
     "m": 1
    },
    {
     "t": "1 : 1 ratio so moles of Cl⁻ = 2.00 × 10⁻³ mol",
     "m": 1
    },
    {
     "t": "Concentration = 2.00 × 10⁻³ ÷ 0.0200 = 0.10 mol l⁻¹",
     "m": 1
    }
   ],
   "model": "Ag⁺ + Cl⁻ → AgCl, a 1 : 1 ratio. n(AgCl) = 0.287 ÷ 143.5 = 2.00 × 10⁻³ mol, so there was 2.00 × 10⁻³ mol of chloride in 20.0 cm³. c = 2.00 × 10⁻³ ÷ 0.0200 = 0.10 mol l⁻¹."
  },
  {
   "id": "stoich-w04",
   "topic": "stoich",
   "type": "written",
   "marks": 3,
   "q": "2.50 g of impure aspirin (C₉H₈O₄, GFM = 180) was prepared from 2.00 g of salicylic acid (C₇H₆O₃, GFM = 138). The equation is C₇H₆O₃ + (CH₃CO)₂O → C₉H₈O₄ + CH₃COOH.\nCalculate the percentage yield. (Assume the 2.50 g is pure aspirin.)",
   "points": [
    {
     "t": "Moles of salicylic acid = 2.00 ÷ 138 = 0.01449 mol",
     "m": 1
    },
    {
     "t": "Theoretical mass of aspirin = 0.01449 × 180 = 2.61 g",
     "m": 1
    },
    {
     "t": "Percentage yield = 2.50 ÷ 2.61 × 100 = 96 %",
     "m": 1
    }
   ],
   "model": "The ratio is 1 : 1. n = 2.00 ÷ 138 = 0.01449 mol, giving a theoretical yield of 0.01449 × 180 = 2.61 g. % yield = 2.50 ÷ 2.61 × 100 = 96 %."
  },
  {
   "id": "stoich-w05",
   "topic": "stoich",
   "type": "written",
   "marks": 4,
   "q": "Hydrated sodium carbonate, Na₂CO₃·xH₂O, has a mass of 2.86 g and is dissolved in water and made up to 250 cm³. A 25.0 cm³ portion is neutralised by 20.0 cm³ of 0.100 mol l⁻¹ hydrochloric acid (Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂).\nCalculate the value of x. (GFM Na₂CO₃ = 106; H₂O = 18)",
   "points": [
    {
     "t": "n(HCl) = 0.100 × 0.0200 = 2.00 × 10⁻³ mol",
     "m": 1
    },
    {
     "t": "n(Na₂CO₃) in 25.0 cm³ = 1.00 × 10⁻³ mol; in 250 cm³ = 1.00 × 10⁻² mol",
     "m": 1
    },
    {
     "t": "GFM of hydrated salt = 2.86 ÷ 0.0100 = 286",
     "m": 1
    },
    {
     "t": "286 − 106 = 180 = 10 × 18, so x = 10",
     "m": 1
    }
   ],
   "model": "From 2HCl : 1Na₂CO₃, n(Na₂CO₃) in the portion is 1.00 × 10⁻³ mol, so 1.00 × 10⁻² mol in 250 cm³. The GFM of the hydrate = 2.86 ÷ 0.0100 = 286. Water makes up 286 − 106 = 180, which is 10 × 18, so x = 10."
  },
  {
   "id": "stoich-w06",
   "topic": "stoich",
   "type": "written",
   "marks": 2,
   "q": "Calculate the mass of anhydrous potassium dichromate(VI), K₂Cr₂O₇ (GFM = 294), required to prepare 500 cm³ of a standard solution of concentration 0.0200 mol l⁻¹.",
   "points": [
    {
     "t": "Moles = 0.0200 × 0.500 = 0.0100 mol",
     "m": 1
    },
    {
     "t": "Mass = 0.0100 × 294 = 2.94 g",
     "m": 1
    }
   ],
   "model": "n = c × V = 0.0200 × 0.500 = 0.0100 mol and mass = 0.0100 × 294 = 2.94 g."
  },
  {
   "id": "stoich-x01",
   "topic": "stoich",
   "q": "What is the concentration of a solution made by diluting 10.0 cm³ of 0.500 mol l⁻¹ solution to 250 cm³?",
   "options": [
    "0.0200 mol l⁻¹",
    "0.0400 mol l⁻¹",
    "0.200 mol l⁻¹",
    "0.125 mol l⁻¹"
   ],
   "answer": 0,
   "explanation": "c₁V₁ = c₂V₂: 0.500 × 10.0 = c₂ × 250, so c₂ = 0.0200 mol l⁻¹."
  },
  {
   "id": "stoich-x02",
   "topic": "stoich",
   "q": "In a back titration, what is determined by the titration?",
   "options": [
    "The amount of substance initially present directly",
    "The mass of the precipitate",
    "The amount of excess reagent remaining",
    "The volume of gas produced"
   ],
   "answer": 2,
   "explanation": "An excess of reagent is added to the sample, and the excess is titrated to find how much was used up."
  },
  {
   "id": "stoich-x03",
   "topic": "stoich",
   "q": "In the reaction MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺, how many moles of Fe²⁺ react with 0.0010 mol of MnO₄⁻?",
   "options": [
    "0.0050 mol",
    "0.0010 mol",
    "0.0020 mol",
    "0.0100 mol"
   ],
   "answer": 0,
   "explanation": "The mole ratio is 1 : 5, so 0.0010 mol of permanganate oxidises 0.0050 mol of iron(II)."
  },
  {
   "id": "stoich-x04",
   "topic": "stoich",
   "q": "What mass of silver chloride (GFM = 143.5) would be produced when 0.0100 mol of chloride ions is precipitated?",
   "options": [
    "14.35 g",
    "0.1435 g",
    "1.435 g",
    "2.87 g"
   ],
   "answer": 2,
   "explanation": "The 1 : 1 ratio gives 0.0100 mol AgCl, with mass 0.0100 × 143.5 = 1.435 g."
  },
  {
   "id": "practical-w01",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A titration requires a burette with an uncertainty of ±0.05 cm³ per reading. The initial reading is 0.50 cm³ and the final reading is 20.50 cm³.\n(a) What is the titre? (1)\n(b) Calculate the absolute uncertainty in the titre. (1)\n(c) Calculate the percentage uncertainty in the titre. (1)",
   "points": [
    {
     "t": "(a) 20.50 − 0.50 = 20.00 cm³",
     "m": 1
    },
    {
     "t": "(b) ±0.05 + ±0.05 = ±0.10 cm³",
     "m": 1
    },
    {
     "t": "(c) 0.10 ÷ 20.00 × 100 = 0.5 %",
     "m": 1
    }
   ],
   "model": "(a) Titre = 20.50 − 0.50 = 20.00 cm³. (b) Two readings were taken so the absolute uncertainties add: ±0.10 cm³. (c) Percentage uncertainty = 0.10 ÷ 20.00 × 100 = 0.5 %."
  },
  {
   "id": "practical-w02",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A student prepared a standard solution by dissolving 1.325 g of sodium carbonate (±0.001 g) in a 250.0 cm³ volumetric flask (±0.3 cm³).\n(a) Calculate the percentage uncertainty in the mass. (1)\n(b) Calculate the percentage uncertainty in the volume. (1)\n(c) Estimate the percentage uncertainty in the concentration, and state which measurement contributes most. (1)",
   "points": [
    {
     "t": "(a) 0.001 ÷ 1.325 × 100 = 0.08 %",
     "m": 1
    },
    {
     "t": "(b) 0.3 ÷ 250.0 × 100 = 0.12 %",
     "m": 1
    },
    {
     "t": "(c) Approximately 0.20 % (sum of percentage uncertainties); the volume contributes most",
     "m": 1
    }
   ],
   "model": "(a) 0.08 % for the mass. (b) 0.12 % for the volume. (c) Percentage uncertainties are added when quantities are multiplied or divided, so concentration (mass ÷ volume) has an uncertainty of about 0.20 %, with the flask volume contributing most."
  },
  {
   "id": "practical-w03",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A solid is recrystallised from hot water.\n(a) Why is a minimum volume of hot solvent used? (1)\n(b) Why is the hot solution filtered before cooling? (1)\n(c) Why is the crystal collected by vacuum filtration and washed with a little cold solvent? (1)",
   "points": [
    {
     "t": "(a) So the solution is saturated when hot and the maximum amount of solid crystallises on cooling",
     "m": 1
    },
    {
     "t": "(b) To remove insoluble impurities (filter while hot to avoid crystallising in the funnel)",
     "m": 1
    },
    {
     "t": "(c) Washing removes soluble impurities on the surface; cold solvent avoids dissolving the product",
     "m": 1
    }
   ],
   "model": "(a) A minimum volume of solvent means the solution is saturated and most solid crystallises when cooled. (b) Hot filtration removes insoluble impurities. (c) Washing with cold solvent removes soluble impurities from the crystal surfaces without dissolving much product."
  },
  {
   "id": "practical-w04",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A student determines the melting point of an organic product obtained by recrystallisation.\n(a) How does the melting range of an impure sample compare with that of a pure sample? (1)\n(b) Describe how a mixed melting point could be used to confirm the identity of the product. (2)",
   "points": [
    {
     "t": "(a) An impure sample melts over a wider range and at a lower temperature",
     "m": 1
    },
    {
     "t": "(b) Mix the product with an authentic sample of the suspected compound and measure the melting range",
     "m": 1
    },
    {
     "t": "If there is no depression (the melting point is sharp and unchanged) they are the same compound",
     "m": 1
    }
   ],
   "model": "(a) Impurities lower and broaden the melting range. (b) A mixture of the product with a pure sample of the suspected compound melts sharply at the same temperature if the compounds are identical; a different compound would depress and broaden the melting range."
  },
  {
   "id": "practical-w05",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A compound distributes itself between ether and water. The partition coefficient K = [ether] ÷ [water] = 6.0. 100 cm³ of aqueous solution contains 3.0 g of the compound.\n(a) Calculate the mass of the compound extracted by one extraction with 100 cm³ of ether. (2)\n(b) Is it better to carry out one extraction with 100 cm³ or two extractions with 50 cm³? Explain. (1)",
   "points": [
    {
     "t": "(a) Let x g be in ether: x/100 ÷ ((3.0 − x)/100) = 6.0, so x = 6.0(3.0 − x)",
     "m": 1
    },
    {
     "t": "x = 18 ÷ 7 = 2.57 g extracted",
     "m": 1
    },
    {
     "t": "(b) Two smaller portions extract more in total (so are more efficient)",
     "m": 1
    }
   ],
   "model": "(a) Volumes are equal so the ratio of masses equals K: x ÷ (3.0 − x) = 6.0 gives x = 18 ÷ 7 = 2.57 g. (b) For the same total volume, repeated extractions with smaller volumes remove more solute than a single extraction."
  },
  {
   "id": "practical-w06",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A pure liquid is purified by distillation. Describe the apparatus and explain how pure liquid is obtained.",
   "points": [
    {
     "t": "The impure liquid is heated in a flask with a thermometer at the still head, level with the side arm",
     "m": 1
    },
    {
     "t": "The vapour passes through a condenser (water flowing in at the bottom) and is collected as liquid",
     "m": 1
    },
    {
     "t": "Only the fraction distilling at the boiling point of the pure substance is collected; non-volatile impurities remain",
     "m": 1
    }
   ],
   "model": "Heat the flask so the liquid vaporises; the thermometer measures the temperature of the vapour entering the condenser. The condensed liquid is collected in a receiver, and the fraction at the correct boiling point is kept as the pure product while impurities with different boiling points are separated."
  },
  {
   "id": "practical-w07",
   "topic": "practical",
   "type": "written",
   "marks": 3,
   "q": "A TLC plate is run for an unknown mixture and for two reference compounds. The solvent front travelled 8.0 cm. The unknown gave spots at 2.4 cm and 5.6 cm; reference X gave a spot at 5.6 cm and reference Y at 3.2 cm.\n(a) Calculate the Rf value of reference X. (1)\n(b) Which reference compound is present in the unknown? (1)\n(c) What can you say about the second spot in the unknown? (1)",
   "points": [
    {
     "t": "(a) Rf = 5.6 ÷ 8.0 = 0.70",
     "m": 1
    },
    {
     "t": "(b) X (same distance moved, same Rf)",
     "m": 1
    },
    {
     "t": "(c) It is a different substance, not Y (its Rf of 0.30 differs from the 0.40 of Y)",
     "m": 1
    }
   ],
   "model": "(a) Rf (X) = 5.6 ÷ 8.0 = 0.70. (b) The unknown has a spot at the same height as X, so X is present. (c) The other spot has Rf = 2.4 ÷ 8.0 = 0.30; Y has Rf = 0.40. They differ, so the second spot is neither X nor Y."
  },
  {
   "id": "practical-w08",
   "topic": "practical",
   "type": "written",
   "marks": 2,
   "q": "Explain the purpose of drying an organic liquid product with anhydrous magnesium sulfate before distillation.",
   "points": [
    {
     "t": "Anhydrous magnesium sulfate absorbs traces of water from the organic liquid",
     "m": 1
    },
    {
     "t": "so that the product is not contaminated with water and does not form an azeotrope or hydrolyse",
     "m": 1
    }
   ],
   "model": "Anhydrous magnesium sulfate removes dissolved water from the organic layer, giving a dry product and preventing water interfering with distillation or further reaction."
  },
  {
   "id": "practical-x01",
   "topic": "practical",
   "q": "Why is a vacuum filtration used for collecting crystals?",
   "options": [
    "It is faster and gives drier crystals",
    "It purifies the crystals",
    "It dissolves the crystals",
    "It increases the melting point"
   ],
   "answer": 0,
   "explanation": "The reduced pressure draws solvent through quickly, leaving a drier solid than gravity filtration."
  },
  {
   "id": "practical-x02",
   "topic": "practical",
   "q": "A student calculates the percentage uncertainty in a volume of 25.00 cm³ delivered by a pipette with tolerance ±0.06 cm³. What is it?",
   "options": [
    "0.06 %",
    "2.4 %",
    "0.24 %",
    "0.0024 %"
   ],
   "answer": 2,
   "explanation": "Percentage uncertainty = 0.06 ÷ 25.00 × 100 = 0.24 %."
  },
  {
   "id": "practical-x03",
   "topic": "practical",
   "q": "What is the purpose of a blank (reference) solution in colorimetry?",
   "options": [
    "To set the colorimeter reading to zero absorbance",
    "To act as the standard of highest concentration",
    "To increase the absorbance",
    "To dilute the sample"
   ],
   "answer": 0,
   "explanation": "A blank containing everything except the coloured substance corrects for light absorbed by solvent and cell."
  },
  {
   "id": "practical-x04",
   "topic": "practical",
   "q": "What is a calibration curve used for?",
   "options": [
    "To measure the wavelength of light",
    "To determine the mass of a precipitate",
    "To find the concentration of an unknown from its measured absorbance",
    "To find the boiling point"
   ],
   "answer": 2,
   "explanation": "Absorbances of solutions of known concentration are plotted; the unknown's concentration is read from its absorbance."
  },
  {
   "id": "practical-x05",
   "topic": "practical",
   "q": "In gravimetric analysis, why is the precipitate heated and weighed until constant mass?",
   "options": [
    "To ensure that all water has been removed",
    "To increase the reaction rate",
    "To increase the percentage yield",
    "To calibrate the balance"
   ],
   "answer": 0,
   "explanation": "Repeated heating and weighing until the mass no longer changes shows the sample is dry."
  },
  {
   "id": "practical-x06",
   "topic": "practical",
   "q": "Which technique is used to separate two immiscible liquids?",
   "options": [
    "Filtration",
    "Recrystallisation",
    "Separating funnel",
    "Titration"
   ],
   "answer": 2,
   "explanation": "The denser layer is run off through the tap of a separating funnel."
  },
  {
   "id": "investigation-w01",
   "topic": "investigation",
   "type": "written",
   "marks": 3,
   "q": "A student plans an investigation into how temperature affects the rate of the reaction between sodium thiosulfate and hydrochloric acid, timing the formation of sulfur.\n(a) Name the independent, dependent and one controlled variable. (2)\n(b) Suggest why the student carries out a trial run first. (1)",
   "points": [
    {
     "t": "(a) Independent: temperature of the reaction mixture",
     "m": 1
    },
    {
     "t": "Dependent: time for the sulfur to obscure a cross; controlled: concentration/volume of reagents",
     "m": 1
    },
    {
     "t": "(b) To find a suitable range of temperatures, volumes and times, and to identify problems before the real experiment",
     "m": 1
    }
   ],
   "model": "(a) The independent variable is temperature, the dependent variable is the time taken for the mark to be hidden, and the concentration and volumes are kept constant. (b) A trial run checks that the quantities and measurements are suitable and allows the procedure to be refined."
  },
  {
   "id": "investigation-w02",
   "topic": "investigation",
   "type": "written",
   "marks": 3,
   "q": "In an investigation, a student obtained five results which included one that did not fit the pattern.\n(a) What term is used for such a result? (1)\n(b) State two possible actions the student could take. (2)",
   "points": [
    {
     "t": "(a) An outlier (anomalous result)",
     "m": 1
    },
    {
     "t": "(b) Repeat the measurement to check whether it was an error",
     "m": 1
    },
    {
     "t": "Exclude the outlier from the average, justifying why, and report it",
     "m": 1
    }
   ],
   "model": "(a) The result is an outlier or anomaly. (b) The student should repeat that measurement to see whether it was a mistake and, if the cause is identified, exclude it from the mean with an explanation."
  },
  {
   "id": "investigation-w03",
   "topic": "investigation",
   "type": "written",
   "marks": 3,
   "q": "A student carries out a risk assessment before an experiment involving concentrated acid.\n(a) Identify one hazard and one control measure. (2)\n(b) Why must a risk assessment be completed before beginning practical work? (1)",
   "points": [
    {
     "t": "(a) Hazard: concentrated acid is corrosive",
     "m": 1
    },
    {
     "t": "Control: wear goggles and gloves, work in a fume cupboard, and dilute carefully by adding acid to water",
     "m": 1
    },
    {
     "t": "(b) To identify possible harm and reduce the risk before it can happen",
     "m": 1
    }
   ],
   "model": "(a) Concentrated acid is corrosive; the risk is reduced by wearing eye protection and gloves and adding acid to water slowly. (b) Risk assessment identifies hazards in advance so that precautions can be put in place."
  },
  {
   "id": "investigation-x01",
   "topic": "investigation",
   "q": "Why should an investigation include repeat measurements?",
   "options": [
    "To increase the rate of reaction",
    "To reduce the percentage uncertainty in each reading to zero",
    "To improve reliability and identify outliers",
    "To avoid needing a control"
   ],
   "answer": 2,
   "explanation": "Repeats allow a mean to be calculated and anomalies spotted, improving reliability."
  },
  {
   "id": "investigation-x02",
   "topic": "investigation",
   "q": "Which variable is deliberately changed in an investigation?",
   "options": [
    "Independent variable",
    "Dependent variable",
    "Controlled variable",
    "Systematic error"
   ],
   "answer": 0,
   "explanation": "The independent variable is the one the experimenter changes to see its effect."
  },
  {
   "id": "investigation-x03",
   "topic": "investigation",
   "q": "Which graph feature would suggest a systematic error in a calibration graph?",
   "options": [
    "The points scatter evenly about the line",
    "The line is straight",
    "The line of best fit not passing through zero absorbance when the concentration is zero",
    "The axes are labelled"
   ],
   "answer": 2,
   "explanation": "An offset at zero concentration suggests a constant error such as an uncorrected blank."
  },
  {
   "id": "articles-w01",
   "topic": "articles",
   "type": "written",
   "marks": 3,
   "q": "A news article claims that a new compound in a skin cream removes wrinkles. It cites one study that used 12 volunteers and was paid for by the company selling the cream.\nSuggest three reasons why the claim should be treated with caution.",
   "points": [
    {
     "t": "The sample size is small (12 volunteers), so results may not be representative",
     "m": 1
    },
    {
     "t": "The study was funded by the company, so there may be bias",
     "m": 1
    },
    {
     "t": "There is only one study with no independent repeat or peer review, and no control group is mentioned",
     "m": 1
    }
   ],
   "model": "A small sample, company funding and a lack of replication by independent researchers or peer review all reduce confidence in the claim, as does the absence of a control group."
  },
  {
   "id": "articles-w02",
   "topic": "articles",
   "type": "written",
   "marks": 3,
   "q": "Explain what is meant by peer review and why it is important in scientific publishing.",
   "points": [
    {
     "t": "Experts in the field independently check a research paper before it is published",
     "m": 1
    },
    {
     "t": "They check methods, results and conclusions for validity and errors",
     "m": 1
    },
    {
     "t": "This increases confidence that the published work is reliable",
     "m": 1
    }
   ],
   "model": "Peer review is the scrutiny of a manuscript by independent experts who assess whether the methods and conclusions are sound. It helps to maintain quality and credibility of the scientific literature."
  },
  {
   "id": "articles-w03",
   "topic": "articles",
   "type": "written",
   "marks": 2,
   "q": "A graph in an article shows that ice-cream sales and sunburn cases both rise in summer. Explain why it would be wrong to conclude that ice cream causes sunburn.",
   "points": [
    {
     "t": "Correlation does not prove causation",
     "m": 1
    },
    {
     "t": "A third factor (hot, sunny weather) causes both to increase",
     "m": 1
    }
   ],
   "model": "The two quantities rise together because both are caused by sunny weather. A correlation between variables does not show that one causes the other."
  },
  {
   "id": "articles-x01",
   "topic": "articles",
   "q": "Which source of information is the most reliable for a scientific claim?",
   "options": [
    "An unnamed internet forum",
    "An advertisement for the product",
    "A peer-reviewed journal article reporting the method and data",
    "A personal opinion blog"
   ],
   "answer": 2,
   "explanation": "Peer-reviewed articles are checked by experts and report their methods and data so the claim can be evaluated."
  },
  {
   "id": "articles-x02",
   "topic": "articles",
   "q": "Why is it useful to check whether a study has a control group?",
   "options": [
    "It shows whether the observed effect is due to the factor being tested",
    "It makes the study cheaper",
    "It guarantees the results are correct",
    "It allows the sample to be smaller"
   ],
   "answer": 0,
   "explanation": "Comparing with a control showing no treatment indicates what happens without the factor, so any effect can be attributed to it."
  },
  {
   "id": "articles-x03",
   "topic": "articles",
   "q": "A study's conclusion is based on one experiment carried out once. What should be done to increase confidence?",
   "options": [
    "Publish it immediately",
    "Use a bigger graph",
    "Repeat the experiment independently and obtain similar results",
    "Remove the data that do not fit"
   ],
   "answer": 2,
   "explanation": "Independent replication is the best way to confirm a result."
  }
 ]
};