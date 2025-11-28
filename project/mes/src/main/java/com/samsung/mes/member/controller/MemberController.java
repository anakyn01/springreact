package com.samsung.mes.member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.samsung.mes.member.dto.MemberRequest;
import com.samsung.mes.member.entity.Member;
import com.samsung.mes.member.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = "http://localhost:3000") // 리액트 개발 서버 주소
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public ResponseEntity<?> register(@RequestBody MemberRequest request) {
        Member saved = memberService.register(request);
        return ResponseEntity.ok(saved.getId());
    }
}
