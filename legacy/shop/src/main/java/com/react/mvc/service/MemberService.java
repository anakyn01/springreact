package com.react.mvc.service;

import org.springframework.stereotype.Service;

import com.react.mvc.dao.MemberDAO;
import com.react.mvc.vo.Member;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
	
	private final MemberDAO memberDAO;
	
	public void register(Member member) {
		memberDAO.insertMember(member);
	}

}
