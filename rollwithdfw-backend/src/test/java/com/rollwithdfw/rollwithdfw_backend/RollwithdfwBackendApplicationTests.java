package com.rollwithdfw.rollwithdfw_backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootTest
class RollwithdfwBackendApplicationTests {

	@MockBean
	private JavaMailSender javaMailSender; // satisfies your email service

	@Test
	void contextLoads() {
		// if the context starts without throwing, this test passes
	}
}
