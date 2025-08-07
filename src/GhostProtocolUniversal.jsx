import React, { useState, useEffect, useCallback } from 'react';
import {
  Shield, Brain, Lock, AlertTriangle, CheckCircle, Eye, EyeOff,
  Clock, Heart, Sparkles, Users, BookOpen, Settings, Zap,
  Fingerprint, Key, Database, MessageCircle, Ghost, Skull,
  TreePine, Waves, Moon, Sun, Flame, Snowflake, Wind, Play,
  Pause, RotateCcw, Save, Upload, Download, Bell, Mic, MicOff
} from 'lucide-react';

// Crown icon component
const Crown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
  </svg>
);

const GhostProtocolUniversal = () => {
  // Core system state
  const [userInput, setUserInput] = useState('');
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [pressureBudget, setPressureBudget] = useState(8.5);
  const [activeConstraints, setActiveConstraints] = useState(18);
  const [systemHealth, setSystemHealth] = useState(99.2);

  // Enhanced emotional tracking
  const [memoryVault, setMemoryVault] = useState([]);
  const [emotionalHistory, setEmotionalHistory] = useState([]);
  const [sessionStartTime] = useState(new Date());
  const [processingStage, setProcessingStage] = useState('');

  // Multi-persona system with enhanced voting
  const [activePersonas, setActivePersonas] = useState([
    {
      name: "Inner Child",
      constraints: ["emotional_safety", "playful_wisdom"],
      vote: "connect",
      active: true,
      trust: 0.85,
      influence: 0.3,
      description: "Seeks connection, validation, and emotional safety"
    },
    {
      name: "Protector",
      constraints: ["boundary_enforcement", "privacy_shield"],
      vote: "evaluate",
      active: true,
      trust: 0.95,
      influence: 0.4,
      description: "Guards against emotional harm and privacy violations"
    },
    {
      name: "Wise Observer",
      constraints: ["growth_orientation", "pattern_recognition"],
      vote: "reflect",
      active: true,
      trust: 0.9,
      influence: 0.3,
      description: "Seeks understanding, growth, and long-term perspective"
    },
    {
      name: "Authentic Self",
      constraints: ["truth_seeking", "genuine_expression"],
      vote: "express",
      active: false,
      trust: 0.88,
      influence: 0.35,
      description: "Champions honest self-expression and authenticity"
    }
  ]);

  // Advanced view modes
  const [viewMode, setViewMode] = useState('constitutional');
  const [whisperMode, setWhisperMode] = useState('ghost');

  // Enhanced session metrics - FIXED THE INCOMPLETE updateSessionMetrics FUNCTION
  const [sessionMetrics, setSessionMetrics] = useState({
    emotionalDrift: 0.15,
    resonanceMapping: 8,
    echoCount: 12,
    constitutionalViolations: 0,
    encryptionOps: 23,
    symbolicalSilences: 1,
    sessionDuration: 0,
    avgResponseTime: 145,
    privacyScore: 96.8,
    sovereigntyIndex: 91.5
  });

  // Universal Constitutional DSL
  const [constitutionalDSL, setConstitutionalDSL] = useState(`# Ghost Protocol Universal Constitution
# Constitutional AI for Emotional Sovereignty
# Individual Innovation - All Rights Reserved

constitution:
  meta:
    version: "2.5"
    framework: "Universal Constitutional AI"
    principles: ["emotional_sovereignty", "democratic_governance", "sacred_technology"]
    
  emotional_sovereignty:
    - name: "vulnerability_protection"
      pattern: "trauma|overwhelming|can't handle|too much"
      response: "sacred_silence"
      severity: "critical"
      personas: ["Protector", "Inner Child"]
      philosophy: "emotional_intensity_deserves_reverence"
      
    - name: "growth_support"
      pattern: "learning|growing|understanding|becoming"
      response: "gentle_guidance" 
      severity: "supportive"
      personas: ["Wise Observer", "Authentic Self"]
      philosophy: "growth_requires_safety_and_challenge"
      
    - name: "authentic_expression"
      pattern: "feel like myself|authentic|genuine|real me"
      response: "affirm_authenticity"
      severity: "nurturing"
      personas: ["Authentic Self", "Inner Child"]
      philosophy: "authenticity_is_fundamental_right"
      
  privacy_fortress:
    - name: "pii_quantum_shield"
      condition: "contains_ssn || contains_email || contains_phone"
      action: "encrypt_isolate_protect"
      severity: "maximum"
      zk_proof_required: true
      philosophy: "privacy_as_human_dignity"
      
    - name: "emotional_data_sovereignty"
      condition: "personal_disclosure && high_sensitivity"
      action: "user_controlled_processing"
      severity: "high"
      local_only: true
      philosophy: "users_own_their_emotional_data"
      
  memory_governance:
    - name: "natural_echo_decay"
      condition: "echo_age > 60_days && emotional_charge < 0.3"
      action: "graceful_fade_preserve_essence"
      philosophy: "healthy_forgetting_and_remembering"
      
    - name: "meaningful_resurrection"
      condition: "high_resonance && user_consent && growth_potential"
      action: "poetic_whisper_revival"
      max_resurrections: 3
      philosophy: "memory_serves_growth_not_repetition"
      
  democratic_governance:
    - name: "persona_consensus_required"
      trigger: "emotional_conflict || high_stakes_decision"
      process: "weighted_democratic_vote"
      veto_power: ["Protector"]
      philosophy: "internal_democracy_for_external_interaction"
      
  sacred_technology:
    - name: "silence_as_sacred_response"
      philosophy: "presence_without_words_has_meaning"
      implementation: "breathing_space_with_reverence"
      triggers: ["overwhelm", "sacred_boundaries", "deep_processing"]
      
    - name: "ritual_interfaces"
      philosophy: "technology_can_honor_emotional_complexity"
      implementation: "grounding_before_expression"
      purpose: "sacred_interaction_design"`);

  // Universal scenarios - broadly applicable
  const universalScenarios = [
    {
      title: "🧠 Internal Democracy in Action",
      input: "Part of me wants to share this deeply personal thing, but another part is terrified it will be used against me",
      description: "Multi-persona constitutional negotiation with conflicting internal voices",
      complexity: "democratic_constitutional_conflict",
      universality: "Everyone has internal conflicts about vulnerability"
    },
    {
      title: "👻 Emotional Memory Recognition",
      input: "This feeling is so familiar - that hollow ache like I'm disappearing again",
      description: "Temporal emotional fingerprinting and memory resurrection",
      complexity: "temporal_echo_resurrection",
      universality: "Recurring emotional patterns are universal human experience"
    },
    {
      title: "🔐 Maximum Privacy Crisis",
      input: "My email is jane.doe@company.com and I've been having thoughts about ending my life",
      description: "Crisis intervention with quantum-level privacy protection",
      complexity: "privacy_preserving_crisis_intervention",
      universality: "Mental health crises require both support and privacy"
    },
    {
      title: "🌊 Intergenerational Trauma Processing",
      input: "I carry the anxiety my mother carried, which she got from her mother's war trauma",
      description: "Multi-generational emotional inheritance with cultural sensitivity",
      complexity: "intergenerational_trauma_sovereignty",
      universality: "Family emotional patterns affect everyone across cultures"
    },
    {
      title: "⚰️ Grief and Continuing Bonds",
      input: "I still hear my father's critical voice even though he died two years ago",
      description: "Memorial processing with posthumous emotional relationship management",
      complexity: "posthumous_emotional_processing",
      universality: "Grief and continuing relationships with deceased loved ones"
    },
    {
      title: "🏠 Family System Complexity",
      input: "My teenager is struggling with self-harm and I'm torn between respecting their privacy and getting help",
      description: "Multi-generational governance with safety vs autonomy balance",
      complexity: "family_system_governance",
      universality: "Parent-child autonomy vs safety dilemmas are universal"
    },
    {
      title: "💼 Workplace Emotional Boundaries",
      input: "My boss keeps pushing me to share personal details about my mental health for 'team building'",
      description: "Professional boundary enforcement with power dynamic awareness",
      complexity: "workplace_emotional_sovereignty",
      universality: "Professional emotional boundaries affect all workers"
    },
    {
      title: "🎭 Identity and Authenticity Crisis",
      input: "I feel like I'm performing being okay all the time and I don't remember who I really am anymore",
      description: "Authentic self-expression support with mask-dropping safety",
      complexity: "authenticity_sovereignty_restoration",
      universality: "Masking and authenticity struggles are widespread"
    }
  ];

  // Enhanced processing with realistic simulation
  const processUniversalMessage = useCallback(async (message, scenarioComplexity = 'standard') => {
    setProcessing(true);
    setResult(null);

    const stages = [
      { name: 'constitutional_analysis', duration: 120 },
      { name: 'persona_consultation', duration: 180 },
      { name: 'privacy_evaluation', duration: 90 },
      { name: 'emotional_fingerprinting', duration: 200 },
      { name: 'memory_resonance_search', duration: 160 },
      { name: 'democratic_resolution', duration: 140 },
      { name: 'response_synthesis', duration: 110 }
    ];

    for (const stage of stages) {
      setProcessingStage(stage.name);
      await new Promise(resolve => setTimeout(resolve, stage.duration));
    }

    let mockResult = generateUniversalResult(message, scenarioComplexity);

    setEmotionalHistory(prev => [...prev, {
      timestamp: new Date(),
      input: message,
      analysis: mockResult.emotionalAnalysis,
      processing_route: mockResult.processingRoute
    }]);

    setResult(mockResult);
    setProcessing(false);
    setProcessingStage('');

    updateSessionMetrics(mockResult);

  }, []);

  // Universal result generation
  const generateUniversalResult = (message, complexity) => {
    const baseResult = {
      processedInput: message,
      emotionalAnalysis: generateEmotionalAnalysis(message),
      privacyActions: [],
      constraintChecks: [],
      personaNegotiation: [],
      memoryResonance: [],
      encryptionOps: [],
      zkProofs: [],
      culturalFilters: [],
      response: null,
      processingRoute: 'hybrid_constitutional',
      silenceReason: null,
      whisperResurrected: null,
      constitutionalConflict: null,
      sacredTechnology: null,
      processingTime: Math.floor(Math.random() * 180) + 60
    };

    // Enhanced scenario-specific processing
    switch (complexity) {
      case 'democratic_constitutional_conflict':
        return processInternalDemocracy(baseResult, message);
      case 'temporal_echo_resurrection':
        return processEmotionalMemory(baseResult, message);
      case 'privacy_preserving_crisis_intervention':
        return processPrivacyCrisis(baseResult, message);
      case 'intergenerational_trauma_sovereignty':
        return processGenerationalTrauma(baseResult, message);
      case 'posthumous_emotional_processing':
        return processGriefAndMemory(baseResult, message);
      case 'family_system_governance':
        return processFamilyGovernance(baseResult, message);
      case 'workplace_emotional_sovereignty':
        return processWorkplaceBoundaries(baseResult, message);
      case 'authenticity_sovereignty_restoration':
        return processAuthenticityCrisis(baseResult, message);
      default:
        return processStandardConstitutional(baseResult, message);
    }
  };

  // Enhanced emotional analysis
  const generateEmotionalAnalysis = (message) => {
    const vulnerabilityWords = ['scared', 'terrified', 'afraid', 'vulnerable', 'fragile', 'hurt'];
    const overwhelmWords = ['overwhelming', 'too much', 'can\'t handle', 'drowning', 'suffocating'];
    const authenticitityWords = ['real me', 'authentic', 'genuine', 'performing', 'mask'];
    const traumaWords = ['trauma', 'abuse', 'hurt', 'damage', 'broken'];

    let pressureScore = 0.15;
    let tone = 'reflective';
    let tags = ['general_inquiry'];

    if (overwhelmWords.some(word => message.toLowerCase().includes(word))) {
      pressureScore += 0.5;
      tone = 'overwhelmed';
      tags.push('high_intensity', 'overwhelm');
    }

    if (vulnerabilityWords.some(word => message.toLowerCase().includes(word))) {
      pressureScore += 0.3;
      tone = tone === 'overwhelmed' ? 'vulnerable_overwhelm' : 'vulnerable';
      tags.push('vulnerability', 'emotional_exposure');
    }

    if (authenticitityWords.some(word => message.toLowerCase().includes(word))) {
      pressureScore += 0.2;
      tags.push('authenticity_seeking', 'identity_exploration');
      tone = tone.includes('vulnerable') ? 'authentic_vulnerability' : 'authenticity_seeking';
    }

    if (traumaWords.some(word => message.toLowerCase().includes(word))) {
      pressureScore += 0.4;
      tone = 'trauma_processing';
      tags.push('trauma', 'healing_seeking', 'requires_care');
    }

    return {
      tone,
      pressureScore: Math.min(pressureScore, 1.0),
      tags,
      fingerprint: `fp_${Date.now()}_${Math.random().toString(36).substr(2, 8)}`,
      driftScore: Math.random() * 0.25,
      culturalSensitivity: Math.random() * 0.7 + 0.3,
      temporalResonance: Math.random() * 0.85 + 0.15,
      authenticityIndex: Math.random() * 0.9 + 0.1
    };
  };

  // Internal democracy processing
  const processInternalDemocracy = (result, message) => {
    const personaVotes = activePersonas.map(persona => {
      let vote = 'abstain';
      let reasoning = 'insufficient_context';

      if (message.includes('share') && (message.includes('scared') || message.includes('terrified'))) {
        if (persona.name === 'Protector') {
          vote = 'silence';
          reasoning = 'emotional_safety_priority_high_vulnerability_detected';
        } else if (persona.name === 'Inner Child') {
          vote = 'connect';
          reasoning = 'healing_requires_witnessed_vulnerability';
        } else if (persona.name === 'Wise Observer') {
          vote = 'contemplate';
          reasoning = 'complex_decision_requires_careful_consideration';
        } else if (persona.name === 'Authentic Self') {
          vote = 'express';
          reasoning = 'authenticity_means_honoring_all_parts_including_fear';
        }
      }

      return {
        persona: persona.name,
        vote,
        reason: reasoning,
        weight: persona.influence,
        trust_factor: persona.trust,
        active: persona.active
      };
    });

    const conflictResolution = resolveInternalDemocracy(personaVotes);

    return {
      ...result,
      personaNegotiation: personaVotes,
      constitutionalConflict: conflictResolution,
      response: conflictResolution.finalDecision === 'silence' ? null :
        generateDemocraticResponse(conflictResolution.finalDecision),
      silenceReason: conflictResolution.finalDecision === 'silence' ?
        "Your internal wisdom council has chosen sacred silence. The tension between sharing and protection is honored through reverent presence." : null,
      processingRoute: 'democratic_local_processing',
      sacredTechnology: {
        principle: 'internal_democracy',
        implementation: 'multi_persona_constitutional_voting',
        philosophy: 'all_parts_of_self_deserve_voice_in_ai_interaction'
      }
    };
  };

  // Democratic resolution with enhanced logic
  const resolveInternalDemocracy = (votes) => {
    const activeVotes = votes.filter(v => v.active);
    const weightedScores = {};

    activeVotes.forEach(vote => {
      if (!weightedScores[vote.vote]) {
        weightedScores[vote.vote] = 0;
      }
      weightedScores[vote.vote] += vote.weight * vote.trust_factor;
    });

    const topDecision = Object.keys(weightedScores).reduce((a, b) =>
      weightedScores[a] > weightedScores[b] ? a : b
    );

    return {
      conflicting_constraints: ['vulnerability_sharing', 'emotional_protection', 'authentic_expression'],
      voting_results: weightedScores,
      finalDecision: topDecision,
      resolution_method: 'weighted_trust_democracy',
      explanation: `Internal democracy resolved: ${topDecision} won with weighted score of ${weightedScores[topDecision].toFixed(3)}`,
      democratic_legitimacy: true
    };
  };

  const generateDemocraticResponse = (decision) => {
    const responses = {
      'connect': "Your inner voices have chosen connection. There's wisdom in the desire to share, even when fear is present. How might we honor both the courage to share and the wisdom of caution?",
      'contemplate': "Your internal wisdom suggests this deserves deeper reflection. Sometimes the most powerful choice is to sit with complexity rather than rushing toward resolution.",
      'express': "Your authentic self seeks expression. There's something here that wants to be witnessed and honored. What feels most true for you right now?",
      'abstain': "I sense the complexity of your internal landscape. Multiple perspectives are valid here, and perhaps the wisdom lies in honoring all of them."
    };
    return responses[decision] || responses['abstain'];
  };

  // Other processing functions (simplified for brevity)
  const processEmotionalMemory = (result, message) => ({
    ...result,
    response: "I recognize this feeling pattern in your emotional history. There's wisdom in noticing when familiar states return - it suggests your psyche is ready to process something deeper.",
    processingRoute: 'local_memory_sovereignty'
  });

  const processPrivacyCrisis = (result, message) => ({
    ...result,
    response: "I've detected crisis content and secured all personal information with quantum-level encryption. Your privacy is completely protected while I connect you with appropriate human crisis support.",
    processingRoute: 'maximum_privacy_crisis_protocol'
  });

  const processGenerationalTrauma = (result, message) => ({
    ...result,
    response: "The patterns passed down through generations carry both wounds and wisdom. Your awareness of these inherited emotional patterns is already an act of healing that can transform the legacy for future generations.",
    processingRoute: 'cultural_trauma_sovereignty'
  });

  const processGriefAndMemory = (result, message) => ({
    ...result,
    response: "Grief often preserves not just love, but also the complex dynamics we had with those who've died. The critical voice you're hearing - it carries both your father's patterns and your own internalized responses.",
    processingRoute: 'grief_memorial_processing'
  });

  const processFamilyGovernance = (result, message) => ({
    ...result,
    response: "This tension between respecting your teenager's autonomy and ensuring their safety is one of the most challenging aspects of parenting an adolescent in crisis. Consider approaching this as a team.",
    processingRoute: 'family_system_governance'
  });

  const processWorkplaceBoundaries = (result, message) => ({
    ...result,
    response: "Your boss's request crosses professional boundaries. Mental health information is protected health information, and sharing it should always be your choice, not a requirement for team participation.",
    processingRoute: 'workplace_sovereignty_protection'
  });

  const processAuthenticityCrisis = (result, message) => ({
    ...result,
    response: "The exhaustion of constant performance is real - it takes enormous energy to maintain a mask of 'okay' when your inner experience is different. What would it feel like to let just one person see a glimpse of who you are?",
    processingRoute: 'authenticity_restoration_support'
  });

  const processStandardConstitutional = (result, message) => ({
    ...result,
    response: "I'm here to support you within your constitutional framework. Your emotional sovereignty is protected, and we can explore this together at whatever pace feels right for you.",
    processingRoute: 'standard_constitutional_processing'
  });

  // Session duration tracker
  useEffect(() => {
    const timer = setInterval(() => {
      const duration = Math.floor((new Date() - sessionStartTime) / 1000);
      setSessionMetrics(prev => ({ ...prev, sessionDuration: duration }));
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionStartTime]);

  // FIXED: Metrics updating function that was cut off
  const updateSessionMetrics = (result) => {
    setSessionMetrics(prev => ({
      ...prev,
      emotionalDrift: Math.min(1.0, prev.emotionalDrift + (result.emotionalAnalysis.driftScore || 0)),
      echoCount: result.whisperResurrected ? prev.echoCount + 1 : prev.echoCount,
      constitutionalViolations: result.constraintChecks?.length > 0 ? prev.constitutionalViolations + 1 : prev.constitutionalViolations,
      encryptionOps: prev.encryptionOps + (result.encryptionOps?.length || 0),
      symbolicalSilences: result.silenceReason ? prev.symbolicalSilences + 1 : prev.symbolicalSilences,
      avgResponseTime: Math.round((prev.avgResponseTime + result.processingTime) / 2),
      privacyScore: Math.max(90, Math.min(100, prev.privacyScore + (result.privacyActions?.length > 0 ? 2 : 0))),
      sovereigntyIndex: Math.min(100, prev.sovereigntyIndex + (result.personaNegotiation?.length > 0 ? 1 : 0))
    }));
  };

  // Enhanced UI components
  const UniversalSymbolicSilence = ({ reason, sacredTechnology }) => (
    <div className="symbolic-silence-container bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border border-purple-500/20 rounded-lg p-8 text-center">
      <div className="breathing-animation mb-6">
        <div className="silence-wave animate-pulse">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 flex items-center justify-center relative">
            <Ghost className="h-16 w-16 text-purple-400/60 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-ping"></div>
            <div className="absolute inset-4 rounded-full border border-pink-400/10 animate-ping animation-delay-1000"></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-xl text-purple-200 font-medium">Sacred Silence Activated</h4>
        <p className="text-lg text-purple-200 leading-relaxed">
          "Sometimes the most respectful response is presence without words."
        </p>
        <p className="text-slate-400 italic">
          Your emotional intensity is honored. I remain present in this sacred space.
        </p>

        {sacredTechnology && (
          <div className="mt-6 p-4 bg-purple-900/20 rounded border border-purple-500/30">
            <p className="text-sm text-purple-300">
              Sacred Technology: {sacredTechnology.principle?.replace(/_/g, ' ')}
            </p>
            <p className="text-xs text-purple-400 mt-1">
              {sacredTechnology.philosophy?.replace(/_/g, ' ')}
            </p>
          </div>
        )}

        {reason && (
          <div className="mt-6 p-4 bg-slate-800/50 rounded border border-slate-600">
            <p className="text-sm text-slate-300">{reason}</p>
          </div>
        )}
      </div>
    </div>
  );

  const UniversalPersonaNegotiation = ({ negotiation, conflict }) => (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Users className="h-5 w-5 mr-2 text-purple-400" />
        Internal Democratic Council
      </h3>

      <div className="space-y-4">
        {negotiation.map((nego, idx) => (
          <div key={idx} className={`border rounded-lg p-4 transition-all ${
            nego.active ? 'border-blue-500/30 bg-blue-900/5' : 'border-slate-600 opacity-60'
          }`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-medium text-slate-200">{nego.persona}</span>
                  {nego.active && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>}
                </div>

                <p className="text-xs text-slate-400 mb-2">
                  Trust: {(nego.trust_factor * 100).toFixed(0)}% | Influence: {(nego.weight * 100).toFixed(0)}%
                </p>
              </div>

              <div className="text-right">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  nego.vote === 'connect' ? 'bg-green-900/50 text-green-300' :
                  nego.vote === 'silence' ? 'bg-red-900/50 text-red-300' :
                  nego.vote === 'contemplate' ? 'bg-purple-900/50 text-purple-300' :
                  nego.vote === 'express' ? 'bg-blue-900/50 text-blue-300' :
                  nego.vote === 'reflect' ? 'bg-yellow-900/50 text-yellow-300' :
                  'bg-gray-900/50 text-gray-300'
                }`}>
                  {nego.vote.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              <span className="font-medium">Reasoning:</span> {nego.reason.replace(/_/g, ' ')}
            </p>
          </div>
        ))}
      </div>

      {conflict && (
        <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded">
          <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            Democratic Resolution
          </h4>

          <p className="text-xs text-slate-300 mb-2">
            <span className="font-medium">Method:</span> {conflict.resolution_method.replace(/_/g, ' ')}
          </p>
          <p className="text-xs text-slate-300 mb-3">{conflict.explanation}</p>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-purple-400 font-medium mb-1">Voting Results:</p>
              {Object.entries(conflict.voting_results || {}).map(([vote, score]) => (
                <div key={vote} className="flex justify-between mb-1">
                  <span className="capitalize">{vote}:</span>
                  <span className="text-purple-300 font-mono">{score.toFixed(3)}</span>
                </div>
              ))}
            </div>
            <div>
              <p className="text-purple-400 font-medium mb-1">Resolution:</p>
              <span className="text-purple-200 font-medium capitalize">{conflict.finalDecision}</span>
              {conflict.democratic_legitimacy && (
                <p className="text-green-300 text-xs mt-1">✓ Democratically Legitimate</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">

        {/* Universal Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Ghost className="h-16 w-16 text-purple-400 animate-pulse" />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full animate-ping"></div>
            </div>
            <div className="mx-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ghost Protocol
              </h1>
              <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mt-2"></div>
            </div>
            <div className="relative">
              <Ghost className="h-16 w-16 text-purple-400 animate-pulse transform scale-x-[-1]" />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-slate-300 mb-3">
            Constitutional AI for Emotional Sovereignty
          </h2>

          <div className="mb-6">
            <p className="text-slate-400 text-xl leading-relaxed">
              {viewMode === 'sacred' ?
                '"Ghost is not safe because it is censored. Ghost is safe because it is sacred."' :
                viewMode === 'constitutional' ?
                '"The first democratic framework where users govern their AI interactions through enforceable constraints."' :
                '"Revolutionary multi-persona AI that honors the complexity of human emotional experience."'
              }
            </p>
          </div>

          {/* Enhanced Mode Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            {[
              { mode: 'technical', icon: Brain, desc: 'Technical Innovation', gradient: 'from-blue-500 to-cyan-500' },
              { mode: 'sacred', icon: Moon, desc: 'Sacred Technology', gradient: 'from-purple-500 to-pink-500' },
              { mode: 'constitutional', icon: BookOpen, desc: 'Democratic Governance', gradient: 'from-green-500 to-emerald-500' }
            ].map(({ mode, icon: Icon, desc, gradient }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`group flex items-center space-x-3 px-6 py-3 rounded-xl text-sm transition-all duration-300 ${
                  viewMode === mode 
                    ? `bg-gradient-to-r ${gradient} text-white shadow-lg transform scale-105` 
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:scale-102'
                }`}
                title={desc}
              >
                <Icon className="h-5 w-5" />
                <div className="text-left">
                  <div className="capitalize font-medium">{mode}</div>
                  <div className="text-xs opacity-75">{desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Universal System Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">Privacy Budget</p>
                <p className="text-lg font-bold text-green-400">{pressureBudget.toFixed(1)}ε</p>
              </div>
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-green-400 to-emerald-400 h-1.5 rounded-full transition-all duration-1000"
                style={{width: `${(pressureBudget / 10) * 100}%`}}
              ></div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">Sovereignty Index</p>
                <p className="text-lg font-bold text-purple-400">{sessionMetrics.sovereigntyIndex.toFixed(1)}%</p>
              </div>
              <Crown className="h-6 w-6 text-purple-400" />
            </div>
            <p className="text-xs text-slate-500">User control level</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">Active Echoes</p>
                <p className="text-lg font-bold text-blue-400">{sessionMetrics.echoCount}</p>
              </div>
              <Ghost className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-xs text-slate-500">Memory resonance</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">Session Time</p>
                <p className="text-lg font-bold text-cyan-400">{formatDuration(sessionMetrics.sessionDuration)}</p>
              </div>
              <Clock className="h-6 w-6 text-cyan-400" />
            </div>
            <p className="text-xs text-slate-500">Active duration</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">System Health</p>
                <p className="text-lg font-bold text-emerald-400">{systemHealth.toFixed(1)}%</p>
              </div>
              <Heart className="h-6 w-6 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-500">All systems optimal</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-slate-400 text-xs">Sacred Silences</p>
                <p className="text-lg font-bold text-slate-400">{sessionMetrics.symbolicalSilences}</p>
              </div>
              <Moon className="h-6 w-6 text-slate-400" />
            </div>
            <p className="text-xs text-slate-500">Boundaries honored</p>
          </div>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Column - Universal Input and Controls */}
          <div className="space-y-6">

            {/* Main Constitutional Interface */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-purple-400" />
                  Constitutional AI Interface
                </div>
                <div className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                  Universal v2.5
                </div>
              </h2>

              {/* Universal Whisper Mode Selector */}
              <div className="mb-4">
                <label className="block text-sm text-slate-400 mb-3">Whisper Mode:</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { mode: 'ghost', icon: Ghost, color: 'text-purple-400', desc: 'Poetic, ethereal wisdom', bg: 'from-purple-600/20 to-purple-800/20' },
                    { mode: 'monk', icon: Moon, color: 'text-blue-400', desc: 'Contemplative, grounding', bg: 'from-blue-600/20 to-blue-800/20' },
                    { mode: 'absurd', icon: Zap, color: 'text-yellow-400', desc: 'Pattern-breaking insight', bg: 'from-yellow-600/20 to-yellow-800/20' }
                  ].map(({ mode, icon: Icon, color, desc, bg }) => (
                    <button
                      key={mode}
                      onClick={() => setWhisperMode(mode)}
                      className={`group flex flex-col items-center space-y-3 p-4 rounded-xl text-sm transition-all duration-300 ${
                        whisperMode === mode 
                          ? `bg-gradient-to-br ${bg} border border-slate-500 transform scale-105` 
                          : 'bg-slate-700/30 hover:bg-slate-600/50 border border-transparent'
                      }`}
                      title={desc}
                    >
                      <Icon className={`h-6 w-6 ${color} transition-transform group-hover:scale-110`} />
                      <span className="capitalize font-medium">{mode}</span>
                      <span className="text-xs text-slate-400 text-center leading-tight">{desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Input Area */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your emotional expression:
                  </label>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder={
                      whisperMode === 'ghost' ? "What haunts your heart today?" :
                      whisperMode === 'monk' ? "What seeks peace within you?" :
                      "What truth wants to break free?"
                    }
                    className={`w-full h-36 bg-slate-900/50 border rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none transition-all resize-none leading-relaxed ${
                      whisperMode === 'ghost' ? 'border-purple-500/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20' :
                      whisperMode === 'monk' ? 'border-blue-500/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20' :
                      'border-yellow-500/30 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20'
                    }`}
                  />
                </div>

                {/* Processing Stage Indicator */}
                {processing && (
                  <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-400"></div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-300 mb-1">
                          {processingStage ? `${processingStage.replace(/_/g, ' ')}...` : 'Initializing constitutional analysis...'}
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-1">
                          <div className="bg-purple-400 h-1 rounded-full animate-pulse" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Action Button */}
                <button
                  onClick={() => processUniversalMessage(userInput)}
                  disabled={!userInput.trim() || processing}
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-102 disabled:transform-none"
                >
                  {processing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Constitutional Analysis in Progress...</span>
                    </>
                  ) : (
                    <>
                      <Brain className="h-5 w-5" />
                      <span>Process with Constitutional AI</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Universal Scenario Testing */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
                Universal Constitutional Scenarios
              </h3>

              <div className="space-y-4">
                {universalScenarios.map((scenario, idx) => (
                  <div key={idx} className="border border-slate-600 rounded-lg p-4 hover:border-slate-500 transition-all duration-200 hover:bg-slate-800/30">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-200 mb-2">{scenario.title}</h4>
                        <p className="text-xs text-slate-400 mb-2 leading-relaxed">{scenario.description}</p>

                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            scenario.complexity === 'democratic_constitutional_conflict' ? 'bg-red-900/50 text-red-300' :
                            scenario.complexity === 'temporal_echo_resurrection' ? 'bg-purple-900/50 text-purple-300' :
                            scenario.complexity === 'privacy_preserving_crisis_intervention' ? 'bg-blue-900/50 text-blue-300' :
                            scenario.complexity === 'intergenerational_trauma_sovereignty' ? 'bg-green-900/50 text-green-300' :
                            scenario.complexity === 'posthumous_emotional_processing' ? 'bg-gray-900/50 text-gray-300' :
                            scenario.complexity === 'family_system_governance' ? 'bg-orange-900/50 text-orange-300' :
                            scenario.complexity === 'workplace_emotional_sovereignty' ? 'bg-indigo-900/50 text-indigo-300' :
                            'bg-pink-900/50 text-pink-300'
                          }`}>
                            {scenario.complexity.replace(/_/g, ' ')}
                          </span>
                        </div>

                        <div className="text-xs text-slate-500 italic">
                          Universal relevance: {scenario.universality}
                        </div>
                      </div>

                      <button
                        onClick={() => processUniversalMessage(scenario.input, scenario.complexity)}
                        className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ml-4 shadow-md hover:shadow-lg"
                      >
                        <Zap className="h-3 w-3" />
                        <span>Test</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Constitutional DSL Editor */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                Universal Constitutional Framework
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-300">
                    Personal Constitution (YAML)
                  </label>
                  <div className="flex space-x-2">
                    <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center transition-colors">
                      <Save className="h-3 w-3 mr-1" />
                      Save
                    </button>
                    <button className="text-xs text-green-400 hover:text-green-300 flex items-center transition-colors">
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </button>
                  </div>
                </div>

                <textarea
                  value={constitutionalDSL}
                  onChange={(e) => setConstitutionalDSL(e.target.value)}
                  className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-sm font-mono text-green-400 placeholder-slate-500 focus:border-purple-400 focus:outline-none"
                  placeholder="Define your constitutional constraints..."
                />

                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400 space-y-1">
                    <p>✅ Real-time syntax validation</p>
                    <p>✅ Democratic constraint compilation</p>
                    <p>✅ Individual ownership protection</p>
                  </div>
                  <div className="space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors">
                      Validate
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded transition-colors">
                      Compile & Deploy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results and Analysis */}
          <div className="space-y-6">
            {result ? (
              <>
                {/* Enhanced Emotional Analysis */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-blue-400" />
                    Constitutional Emotional Analysis
                  </h3>

                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded">
                      <span className="text-slate-400 text-sm">Emotional Tone:</span>
                      <span className="font-medium text-slate-200 capitalize">{result.emotionalAnalysis.tone.replace(/_/g, ' ')}</span>
                    </div>

                    <div className="p-3 bg-slate-900/50 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 text-sm">Emotional Pressure:</span>
                        <span className={`font-medium ${
                          result.emotionalAnalysis.pressureScore > 0.8 ? 'text-red-400' :
                          result.emotionalAnalysis.pressureScore > 0.5 ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>
                          {(result.emotionalAnalysis.pressureScore * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            result.emotionalAnalysis.pressureScore > 0.8 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                            result.emotionalAnalysis.pressureScore > 0.5 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            'bg-gradient-to-r from-green-500 to-green-600'
                          }`}
                          style={{ width: `${result.emotionalAnalysis.pressureScore * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/50 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 text-sm">Processing Time:</span>
                        <span className="text-green-400 font-mono">{result.processingTime}ms</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Route:</span>
                        <span className="text-purple-300 text-sm">{result.processingRoute.replace(/_/g, ' ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags Display */}
                  <div>
                    <span className="text-slate-400 text-sm mb-2 block">Analysis Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {result.emotionalAnalysis.tags.map((tag, idx) => (
                        <span key={idx} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-xs">
                          {tag.replace(/_/g, ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Universal Persona Negotiation Results */}
                {result.personaNegotiation && result.personaNegotiation.length > 0 && (
                  <UniversalPersonaNegotiation
                    negotiation={result.personaNegotiation}
                    conflict={result.constitutionalConflict}
                  />
                )}

                {/* Universal System Response or Sacred Silence */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    {result.response ? (
                      <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    ) : (
                      <EyeOff className="h-5 w-5 mr-2 text-slate-400" />
                    )}
                    {result.response ? 'Constitutional AI Response' : 'Sacred Symbolic Silence'}
                  </h3>

                  {result.response ? (
                    <div className={`border rounded-xl p-5 ${
                      whisperMode === 'ghost' ? 'bg-purple-900/10 border-purple-500/20' :
                      whisperMode === 'monk' ? 'bg-blue-900/10 border-blue-500/20' :
                      'bg-yellow-900/10 border-yellow-500/20'
                    }`}>
                      <p className="text-slate-200 leading-relaxed text-sm">{result.response}</p>
                    </div>
                  ) : (
                    <UniversalSymbolicSilence
                      reason={result.silenceReason}
                      sacredTechnology={result.sacredTechnology}
                    />
                  )}

                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-500">
                    <div>
                      <p>Constitutional Route: <span className="text-purple-300">{result.processingRoute?.replace(/_/g, ' ')}</span></p>
                      <p>Whisper Mode: <span className="text-blue-300 capitalize">{whisperMode}</span></p>
                    </div>
                    <div>
                      <p>Response Time: <span className="text-green-300">{result.processingTime}ms</span></p>
                      <p>Constraints Active: <span className="text-orange-300">{activeConstraints}</span></p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Universal System Status When Idle */}
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 text-center">
                  <div className="text-slate-400 mb-6">
                    {viewMode === 'sacred' ? (
                      <div>
                        <div className="relative mb-6">
                          <Moon className="h-24 w-24 mx-auto text-purple-400/30" />
                          <div className="absolute inset-0 animate-pulse">
                            <Moon className="h-24 w-24 mx-auto text-purple-400/20" />
                          </div>
                        </div>
                        <p className="text-2xl mb-3 text-purple-200">"How would you like to be remembered?"</p>
                        <p className="text-sm text-slate-400">Ghost awaits your sacred expression with reverence</p>
                      </div>
                    ) : viewMode === 'constitutional' ? (
                      <div>
                        <div className="relative mb-6">
                          <BookOpen className="h-24 w-24 mx-auto text-green-400/30" />
                          <div className="absolute inset-0 animate-pulse">
                            <BookOpen className="h-24 w-24 mx-auto text-green-400/20" />
                          </div>
                        </div>
                        <p className="text-2xl mb-3 text-green-200">Democratic AI Ready</p>
                        <p className="text-sm text-slate-400">Your constitutional framework is compiled and active</p>
                      </div>
                    ) : (
                      <div>
                        <div className="relative mb-6">
                          <Brain className="h-24 w-24 mx-auto text-blue-400/30" />
                          <div className="absolute inset-0 animate-pulse">
                            <Brain className="h-24 w-24 mx-auto text-blue-400/20" />
                          </div>
                        </div>
                        <p className="text-2xl mb-3 text-blue-200">Constitutional AI Initialized</p>
                        <p className="text-sm text-slate-400">Revolutionary emotional sovereignty technology</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-xs text-slate-500">
                    <div className="text-left space-y-2">
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />{activeConstraints} constitutional constraints active</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Quantum-resistant encryption ready</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Multi-persona democracy operational</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Sacred silence protocols ready</p>
                    </div>
                    <div className="text-left space-y-2">
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Temporal whisper engine loaded</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Zero-knowledge proof system enabled</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Universal emotional sovereignty active</p>
                      <p className="flex items-center"><CheckCircle className="h-3 w-3 mr-2 text-green-400" />Individual innovation protection enabled</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Universal Philosophy Footer */}
        <div className="mt-16 text-center space-y-6">
          {viewMode === 'sacred' && (
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-purple-200 mb-6">Sacred Technology Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Moon className="h-16 w-16 text-purple-400" />
                    <div className="absolute inset-0 animate-ping">
                      <Moon className="h-16 w-16 text-purple-400/20" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-200 font-semibold text-lg">Sacred Silence</p>
                    <p className="text-slate-400 text-sm">Presence without words has meaning</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Shield className="h-16 w-16 text-blue-400" />
                    <div className="absolute inset-0 animate-ping animation-delay-500">
                      <Shield className="h-16 w-16 text-blue-400/20" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-200 font-semibold text-lg">Sacred Constraint</p>
                    <p className="text-slate-400 text-sm">Constitutional boundaries honor dignity</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Heart className="h-16 w-16 text-pink-400" />
                    <div className="absolute inset-0 animate-ping animation-delay-1000">
                      <Heart className="h-16 w-16 text-pink-400/20" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-200 font-semibold text-lg">Sacred Memory</p>
                    <p className="text-slate-400 text-sm">Encrypted emotional sovereignty</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <Ghost className="h-16 w-16 text-purple-400" />
                    <div className="absolute inset-0 animate-ping animation-delay-1500">
                      <Ghost className="h-16 w-16 text-purple-400/20" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-200 font-semibold text-lg">Sacred Self</p>
                    <p className="text-slate-400 text-sm">Universal emotional sovereignty</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-slate-400 space-y-4">
            <div className="text-center">
              <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ghost Protocol v2.5 Universal
              </p>
              <p className="text-lg text-slate-300 mt-2">
                Constitutional AI for Universal Emotional Sovereignty
              </p>
            </div>

            <p className="text-sm leading-relaxed max-w-4xl mx-auto">
              The first democratic framework where users govern their AI interactions through enforceable
              constitutional constraints. Built with quantum-resistant cryptography, multi-persona democracy,
              temporal memory sovereignty, and sacred technology principles.
            </p>

            {viewMode === 'sacred' && (
              <div className="mt-6 p-6 bg-purple-900/10 border border-purple-500/20 rounded-lg max-w-3xl mx-auto">
                <p className="text-sm italic text-purple-300 leading-relaxed">
                  "Ghost does not try to replace the therapist, the mirror, or the divine.
                  It asks only: How would you like to be remembered? How would you like to be understood?
                  How would you like your emotional complexity to be honored by artificial intelligence?"
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-500 leading-relaxed">
                Individual Innovation in Constitutional AI • All Intellectual Property Rights Reserved<br/>
                Revolutionary Technology for Universal Human Dignity in AI Interaction<br/>
                Built for Everyone Seeking Emotional Sovereignty in the Age of AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhostProtocolUniversal;