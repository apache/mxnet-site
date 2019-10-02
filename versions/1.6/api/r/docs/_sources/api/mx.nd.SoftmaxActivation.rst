

``mx.nd.SoftmaxActivation``
======================================================

Description
----------------------

Applies softmax activation to input. This is intended for internal layers.


.. note::

This operator has been deprecated, please use `softmax`.

If `mode` = ``instance``, this operator will compute a softmax for each instance in the batch.
This is the default mode.

If `mode` = ``channel``, this operator will compute a k-class softmax at each position
of each instance, where `k` = ``num_channel``. This mode can only be used when the input array
has at least 3 dimensions.
This can be used for `fully convolutional network`, `image segmentation`, etc.


**Example**::

	 
	 >>> input_array = mx.nd.array([[3., 0.5, -0.5, 2., 7.],
	 >>>                            [2., -.4, 7.,   3., 0.2]])
	 >>> softmax_act = mx.nd.SoftmaxActivation(input_array)
	 >>> print softmax_act.asnumpy()
	 [[  1.78322066e-02   1.46375655e-03   5.38485940e-04   6.56010211e-03   9.73605454e-01]
	 [  6.56221947e-03   5.95310994e-04   9.73919690e-01   1.78379621e-02   1.08472735e-03]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``mode``                               | {'channel', 'instance'},optional, default='instance'.      |
|                                        |                                                            |
|                                        | Specifies how to compute the softmax. If set to            |
|                                        | ``instance``, it computes softmax for each instance. If    |
|                                        | set to ``channel``, It computes cross channel softmax for  |
|                                        | each position of each                                      |
|                                        | instance.                                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/softmax_activation.cc#L59

