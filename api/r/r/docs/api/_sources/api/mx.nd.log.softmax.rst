.. raw:: html



``mx.nd.log.softmax``
==========================================

Description
----------------------

Computes the log softmax of the input.
This is equivalent to computing softmax followed by log.

**Example**::
	 
	 >>> x = mx.nd.array([1, 2, .1])
	 >>> mx.nd.log_softmax(x).asnumpy()
	 array([-1.41702998, -0.41702995, -2.31702995], dtype=float32)
	 
	 >>> x = mx.nd.array( [[1, 2, .1],[.1, 2, 1]] )
	 >>> mx.nd.log_softmax(x, axis=0).asnumpy()
	 array([[-0.34115392, -0.69314718, -1.24115396],
	 [-1.24115396, -0.69314718, -0.34115392]], dtype=float32)
	 
	 
Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='-1'.                               |
|                                        |                                                            |
|                                        | The axis along which to compute softmax.                   |
+----------------------------------------+------------------------------------------------------------+
| ``temperature``                        | double or None, optional, default=None.                    |
|                                        |                                                            |
|                                        | Temperature parameter in softmax                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray



.. disqus::
   :disqus_identifier: mx.nd.log.softmax
